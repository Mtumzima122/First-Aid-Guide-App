import { ScrollView, StyleSheet, View, TouchableOpacity, Text as RNText } from 'react-native';
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
          Changamoto yako ni ipi
        </ThemedText>
      </ThemedView>

      <View style={styles.gridContainer}>
        {firstAidGuides.map((guide) => (
          <TouchableOpacity
            key={guide.id}
            style={styles.gridItem}
            onPress={() => handleGuidePress(guide.id)}>
            <RNText style={styles.gridIcon}>{guide.icon}</RNText>
            <ThemedText style={styles.gridText}>{guide.title}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.emergencyButton}>
        <ThemedText style={styles.emergencyButtonText}>Piga Simu ya dharura</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: Colors.light.tint,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
  },
  gridItem: {
    width: '40%',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  gridIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  gridText: {
    marginTop: 8,
    fontSize: 16,
    color: Colors.light.text,
  },
  emergencyButton: {
    margin: 16,
    padding: 16,
    backgroundColor: Colors.light.tint,
    borderRadius: 8,
    alignItems: 'center',
  },
  emergencyButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
