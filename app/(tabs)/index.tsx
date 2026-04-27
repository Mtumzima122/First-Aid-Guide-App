import { ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { firstAidGuides } from '@/data/firstAidGuides';
import GuideCard from '@/components/guide-card';

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  const handleGuidePress = (guideId: string) => {
    router.push(`/guide/${guideId}`);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.mainTitle}>
          First Aid Guides
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Learn how to respond to common emergencies and injuries
        </ThemedText>
      </ThemedView>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <ThemedText style={styles.statNumber}>{firstAidGuides.length}</ThemedText>
          <ThemedText style={styles.statLabel}>Guides</ThemedText>
        </View>
        <View style={styles.statBox}>
          <ThemedText style={styles.statNumber}>24/7</ThemedText>
          <ThemedText style={styles.statLabel}>Available</ThemedText>
        </View>
        <View style={styles.statBox}>
          <ThemedText style={styles.statNumber}>✓</ThemedText>
          <ThemedText style={styles.statLabel}>Easy</ThemedText>
        </View>
      </View>

      <View style={styles.guidesContainer}>
        {firstAidGuides.map((guide) => (
          <GuideCard
            key={guide.id}
            id={guide.id}
            title={guide.title}
            icon={guide.icon}
            category={guide.category}
            description={guide.description}
            onPress={handleGuidePress}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <ThemedText style={styles.footerText}>
          📞 For life-threatening emergencies, call 911 immediately. These guides are for
          educational purposes only.
        </ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
    opacity: 0.7,
  },
  guidesContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  footer: {
    marginHorizontal: 16,
    marginBottom: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#fffbea',
    borderLeftWidth: 4,
    borderLeftColor: '#ff922b',
    borderRadius: 8,
  },
  footerText: {
    fontSize: 13,
    lineHeight: 20,
  },
});
