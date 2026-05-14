import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';

/**
 * A bottom tab button wrapper that adds gentle haptic feedback on iOS.
 *
 * This component forwards all tab button props to the underlying
 * PlatformPressable and invokes the original onPressIn handler after
 * triggering haptic feedback.
 */
export function HapticTab({ onPressIn, ...restProps }: BottomTabBarButtonProps) {
  const handlePressIn = (event: Parameters<NonNullable<BottomTabBarButtonProps['onPressIn']>>[0]) => {
    if (process.env.EXPO_OS === 'ios') {
      // Soft feedback on tab touch interaction improves the UX on iOS devices.
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    onPressIn?.(event);
  };

  return <PlatformPressable {...restProps} onPressIn={handlePressIn} />;
}
