import React, { useState, useMemo } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { firstAidGuides } from '@/data/firstAidGuides';
import GuideCard from '@/components/guide-card';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const colorScheme = useColorScheme();

  const filteredGuides = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }
    
    const query = searchQuery.toLowerCase();
    return firstAidGuides.filter(
      (guide) =>
        guide.title.toLowerCase().includes(query) ||
        guide.description.toLowerCase().includes(query) ||
        guide.category.toLowerCase().includes(query) ||
        guide.symptoms.some((symptom) => symptom.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const handleGuidePress = (guideId: string) => {
    router.push(`/guide/${guideId}`);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.mainTitle}>
          Search First Aid
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Find guides by condition, symptom, or category
        </ThemedText>
      </ThemedView>

      <View style={styles.searchContainer}>
        <ThemedText style={styles.searchIcon}>🔍</ThemedText>
        <TextInput
          style={[
            styles.searchInput,
            {
              color: Colors[colorScheme ?? 'light'].text,
            },
          ]}
          placeholder="burns, cuts, drowning, etc..."
          placeholderTextColor={Colors[colorScheme ?? 'light'].tabIconDefault}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {searchQuery.trim() && (
        <View style={styles.resultsContainer}>
          {filteredGuides.length > 0 ? (
            <>
              <ThemedText style={styles.resultsCount}>
                Found {filteredGuides.length} guide{filteredGuides.length !== 1 ? 's' : ''}
              </ThemedText>
              <View style={styles.guidesContainer}>
                {filteredGuides.map((guide) => (
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
            </>
          ) : (
            <View style={styles.noResults}>
              <ThemedText style={styles.noResultsEmoji}>🔍</ThemedText>
              <ThemedText type="subtitle" style={styles.noResultsText}>
                No guides found
              </ThemedText>
              <ThemedText style={styles.noResultsHint}>
                Try different keywords or browse all guides in the "Guides" tab
              </ThemedText>
            </View>
          )}
        </View>
      )}

      {!searchQuery.trim() && (
        <View style={styles.emptyState}>
          <ThemedText style={styles.emptyStateEmoji}>🔎</ThemedText>
          <ThemedText type="subtitle" style={styles.emptyStateText}>
            Search for First Aid Guides
          </ThemedText>
          <ThemedText style={styles.emptyStateHint}>
            Type a condition name, symptom, or category to find relevant first aid information
          </ThemedText>
          
          <View style={styles.suggestionsContainer}>
            <ThemedText style={styles.suggestionsTitle}>Popular searches:</ThemedText>
            <View style={styles.suggestionsList}>
              <View style={styles.suggestionChip}>
                <ThemedText style={styles.suggestionText}>Burns</ThemedText>
              </View>
              <View style={styles.suggestionChip}>
                <ThemedText style={styles.suggestionText}>Cuts</ThemedText>
              </View>
              <View style={styles.suggestionChip}>
                <ThemedText style={styles.suggestionText}>Choking</ThemedText>
              </View>
            </View>
            <View style={styles.suggestionsList}>
              <View style={styles.suggestionChip}>
                <ThemedText style={styles.suggestionText}>Fractures</ThemedText>
              </View>
              <View style={styles.suggestionChip}>
                <ThemedText style={styles.suggestionText}>CPR</ThemedText>
              </View>
              <View style={styles.suggestionChip}>
                <ThemedText style={styles.suggestionText}>Heart</ThemedText>
              </View>
            </View>
          </View>
        </View>
      )}
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
  searchContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
    fontSize: 16,
  },
  resultsContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  resultsCount: {
    fontSize: 14,
    marginBottom: 12,
    marginLeft: 4,
    fontWeight: '500',
  },
  guidesContainer: {
    marginTop: 8,
  },
  noResults: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noResultsEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  noResultsText: {
    marginBottom: 8,
  },
  noResultsHint: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 16,
    opacity: 0.7,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  emptyStateEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyStateText: {
    marginBottom: 8,
  },
  emptyStateHint: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 16,
    opacity: 0.7,
    marginBottom: 24,
  },
  suggestionsContainer: {
    width: '100%',
  },
  suggestionsTitle: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 10,
  },
  suggestionsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  suggestionChip: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  suggestionText: {
    fontSize: 13,
    color: '#007AFF',
  },
});

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });
