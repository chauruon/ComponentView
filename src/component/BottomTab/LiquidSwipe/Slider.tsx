import React, { ReactElement, useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { snapPoint, useVector } from "react-native-redash";

import Wave, { HEIGHT, MARGIN_WIDTH, Side, WIDTH } from "./Wave";
import Button from "./Button";
import { SlideProps } from "./Slide";

const PREV = WIDTH;
const NEXT = 0;
const LEFT_SNAP_POINTS = [MARGIN_WIDTH, PREV];
const RIGHT_SNAP_POINTS = [NEXT, WIDTH - MARGIN_WIDTH];

interface SliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: ReactElement<SlideProps>;
  prev?: ReactElement<SlideProps>;
  next?: ReactElement<SlideProps>;
}

const Slider = ({
  index,
  children: current,
  prev,
  next,
  setIndex,
}: SliderProps) => {
  console.log('index: ', index);
  // console.log('children: ', children);
  const hasPrev = !!prev;
  const hasNext = !!next;
  const zIndex = useSharedValue(0);
  const left = useVector(0, HEIGHT / 2);
  const right = useVector(0, HEIGHT / 2);
  const activeSide = useSharedValue(Side.NONE);
  console.log("🚀 ~ file: Slider.tsx:47 ~ activeSide", activeSide)
  const isTransitioningLeft = useSharedValue(false);
  const isTransitioningRight = useSharedValue(false);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: ({ x }) => {
      console.log("🚀 ~ file: Slider.tsx:110 ~ x", x)
      if (x <= MARGIN_WIDTH && hasPrev) {
        activeSide.value = Side.LEFT;
        zIndex.value = 100;
      } else if (x >= WIDTH - MARGIN_WIDTH && hasNext) {
        activeSide.value = Side.RIGHT;
      } else {
        activeSide.value = Side.NONE;
      }
    },
    onActive: ({ x, y }) => {
      console.log('x: ', x);
      if (activeSide.value === Side.LEFT) {
        left.x.value = Math.max(x, MARGIN_WIDTH);
        left.y.value = y;
      } else if (activeSide.value === Side.RIGHT) {
        right.x.value = Math.max(WIDTH - x, MARGIN_WIDTH);
        right.y.value = y;
      }
    },
    onEnd: ({ velocityX, velocityY, x }) => {
      console.log('velocityX: ', velocityX);
      if (activeSide.value === Side.LEFT) {
        const dest = snapPoint(x, velocityX, LEFT_SNAP_POINTS);
        console.log("🚀 ~ file: Slider.tsx:73 ~ dest", dest)
        isTransitioningLeft.value = dest === PREV;
        left.x.value = withSpring(
          dest,
          {
            velocity: velocityX,
            overshootClamping: isTransitioningLeft.value ? true : false,
            restSpeedThreshold: isTransitioningLeft.value ? 100 : 0.01,
            restDisplacementThreshold: isTransitioningLeft.value ? 100 : 0.01,
          },
          () => {
            if (isTransitioningLeft.value) {
              runOnJS(setIndex)(index - 1);
            } else {
              zIndex.value = 0;
              activeSide.value = Side.NONE;
            }
          }
        );
        left.y.value = withSpring(HEIGHT / 2, { velocity: velocityY });
      } else if (activeSide.value === Side.RIGHT) {
        console.log("🚀 ~ file: Slider.tsx:93 ~ activeSide.value", activeSide.value)
        const dest = snapPoint(x, velocityX, RIGHT_SNAP_POINTS);
        console.log("🚀 ~ file: Slider.tsx:96 ~ dest", dest)
        isTransitioningRight.value = dest === NEXT;
        right.x.value = withSpring(
          WIDTH - dest,
          {
            velocity: velocityX,
            overshootClamping: isTransitioningRight.value ? true : false,
            restSpeedThreshold: isTransitioningRight.value ? 100 : 0.01,
            restDisplacementThreshold: isTransitioningRight.value ? 100 : 0.01,
          },
          () => {
            if (isTransitioningRight.value) {
              runOnJS(setIndex)(index + 1);
            } else {
              activeSide.value = Side.NONE;
            }
          }
        );
        right.y.value = withSpring(HEIGHT / 2, { velocity: velocityY });
      }
    },
  });

  const leftStyle = useAnimatedStyle(() => ({
    zIndex: zIndex.value,
  }));

  useEffect(() => {
    left.x.value = withSpring(MARGIN_WIDTH);
    right.x.value = withSpring(MARGIN_WIDTH);
  }, [index, left, right]);

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={StyleSheet.absoluteFill}>
        {current}
        {prev && (
          <Animated.View style={[StyleSheet.absoluteFill, leftStyle]}>
            <Wave
              position={left}
              side={Side.LEFT}
              isTransitioning={isTransitioningLeft}
            >
              {prev}
            </Wave>
            <Button position={left} side={Side.LEFT} activeSide={activeSide} />
          </Animated.View>
        )}
        {next && (
          <Animated.View style={StyleSheet.absoluteFill}>
            <Wave
              position={right}
              side={Side.RIGHT}
              isTransitioning={isTransitioningRight}
            >
              {next}
            </Wave>
            <Button
              position={right}
              side={Side.RIGHT}
              activeSide={activeSide}
            />
          </Animated.View>
        )}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Slider;