import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface GuideCardProps {
  id: string;
  title: string;
  icon: string;
  category: string;
  description: string;
  onPress: (id: string) => void;
}

export default function GuideCard({
  id,
  title,
  icon,
  category,
  description,
  onPress,
}: GuideCardProps) {
  const colorScheme = useColorScheme();

  const categoryColors: { [key: string]: string } = {
    Injuries: '#FF6B6B',
    Emergency: '#FF922B',
    default: '#4C6EF5',
  };

  const categoryColor = categoryColors[category] || categoryColors.default;

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: colorScheme === 'dark' ? '#1f1f1f' : '#ffffff',
          borderColor: categoryColor + '30',
        },
      ]}
      onPress={() => onPress(id)}
      activeOpacity={0.7}>
      <View style={styles.cardContent}>
        <View style={[styles.iconContainer, { backgroundColor: categoryColor + '20' }]}>
          <ThemedText style={styles.icon}>{icon}</ThemedText>
        </View>
        <View style={styles.textContainer}>
          <ThemedText type="subtitle" style={styles.title}>
            {title}
          </ThemedText>
          <View style={[styles.badge, { backgroundColor: categoryColor + '30' }]}>
            <ThemedText style={[styles.badgeText, { color: categoryColor }]}>
              {category}
            </ThemedText>
          </View>
          <ThemedText numberOfLines={2} style={styles.description}>
            {description}
          </ThemedText>
        </View>
      </View>
      <ThemedText style={styles.arrow}>›</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    gap: 12,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 28,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '500',
  },
  description: {
    fontSize: 13,
    opacity: 0.7,
    lineHeight: 18,
  },
  arrow: {
    fontSize: 24,
    marginLeft: 8,
    opacity: 0.6,
  },
});
