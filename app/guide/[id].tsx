import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { firstAidGuides } from '@/data/firstAidGuides';

export default function GuideDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [currentStep, setCurrentStep] = useState(0);

  const guide = firstAidGuides.find((g) => g.id === id);

  // Create styles with colorScheme immediately
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      padding: 20,
      paddingTop: 60,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f8f9fa',
      borderBottomWidth: 1,
      borderBottomColor: colorScheme === 'dark' ? '#333' : '#e0e0e0',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    icon: {
      fontSize: 32,
      marginRight: 15,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      flex: 1,
      color: Colors[colorScheme ?? 'light'].text,
    },
    categoryBadge: {
      backgroundColor: colorScheme === 'dark' ? '#2d5aa0' : '#e3f2fd',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      alignSelf: 'flex-start',
      marginTop: 5,
    },
    categoryText: {
      fontSize: 12,
      color: colorScheme === 'dark' ? '#ffffff' : '#1976d2',
      fontWeight: '600',
    },
    stepContainer: {
      margin: 20,
      marginTop: 0,
      padding: 20,
      borderRadius: 12,
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#ffffff',
      shadowColor: colorScheme === 'dark' ? '#000' : '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: colorScheme === 'dark' ? 0.3 : 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    stepHeader: {
      alignItems: 'center',
      marginBottom: 20,
    },
    stepNumber: {
      fontSize: 16,
      color: colorScheme === 'dark' ? '#cccccc' : '#666',
      marginBottom: 10,
    },
    stepTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      color: Colors[colorScheme ?? 'light'].text,
    },
    contentContainer: {
      marginBottom: 30,
    },
    explanation: {
      fontSize: 18,
      lineHeight: 26,
      textAlign: 'center',
      marginBottom: 20,
      color: Colors[colorScheme ?? 'light'].text,
    },
    imageContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    stepImage: {
      width: '100%',
      height: 280,
      borderRadius: 8,
      marginTop: 20,
      marginBottom: 20,
    },
    navigation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navButton: {
      paddingHorizontal: 30,
      paddingVertical: 12,
      borderRadius: 8,
      minWidth: 120,
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#007AFF' : Colors[colorScheme ?? 'light'].tint,
    },
    disabledButton: {
      opacity: 0.5,
      backgroundColor: colorScheme === 'dark' ? '#555' : '#ccc',
    },
    navButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
    warningsSection: {
      margin: 20,
      marginTop: 0,
      padding: 20,
      borderRadius: 12,
      borderLeftWidth: 4,
      borderLeftColor: '#ff6b6b',
      backgroundColor: colorScheme === 'dark' ? '#2a1a1a' : '#fff5f5',
    },
    warningsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#ff6b6b',
    },
    listContainer: {
      gap: 10,
    },
    warningItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    warningBullet: {
      fontSize: 16,
      marginRight: 10,
      marginTop: 2,
    },
    warningText: {
      flex: 1,
      fontSize: 16,
      lineHeight: 22,
      color: Colors[colorScheme ?? 'light'].text,
    },
    footer: {
      padding: 20,
      paddingTop: 0,
    },
    footerText: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#cccccc' : '#666',
      textAlign: 'center',
      fontStyle: 'italic',
    },
  });

  if (!guide) {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: Colors[colorScheme ?? 'light'].background },
        ]}>
        <ThemedText type="title">Guide not found</ThemedText>
      </View>
    );
  }

  // Calculate total steps including safety preparation
  const allSteps = [...guide.safetyPreparation, ...guide.steps];
  const totalSteps = allSteps.length;
  const currentStepData = allSteps[currentStep];
  const isOnSafetyStep = currentStep < guide.safetyPreparation.length;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme ?? 'light'].background },
      ]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <ThemedText style={styles.icon}>{guide.icon}</ThemedText>
          <View>
            <ThemedText type="title" style={styles.title}>
              {guide.title}
            </ThemedText>
            <View style={styles.categoryBadge}>
              <ThemedText style={styles.categoryText}>{guide.category}</ThemedText>
            </View>
          </View>
        </View>
      </View>

      <ThemedView style={styles.stepContainer}>
        <View style={styles.stepHeader}>
          <ThemedText type="subtitle" style={styles.stepNumber}>
            Step {currentStep + 1} of {totalSteps}
          </ThemedText>
          {isOnSafetyStep && (
            <ThemedText
              style={{
                fontSize: 14,
                color: colorScheme === 'dark' ? '#ff9800' : '#f57c00',
                fontWeight: '700',
                marginBottom: 8,
              }}>
              ⚠️ SAFETY PREPARATION (IMPORTANT)
            </ThemedText>
          )}
          <ThemedText type="title" style={styles.stepTitle}>
            {currentStepData.title}
          </ThemedText>
        </View>

        <ThemedView style={styles.contentContainer}>
          <ThemedText style={styles.explanation}>{currentStepData.explanation}</ThemedText>

          {currentStepData.image && (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: currentStepData.image }}
                style={styles.stepImage}
                resizeMode="cover"
              />
            </View>
          )}
        </ThemedView>

        <View style={styles.navigation}>
          <TouchableOpacity
            style={[
              styles.navButton,
              currentStep === 0 && styles.disabledButton,
            ]}
            onPress={prevStep}
            disabled={currentStep === 0}
          >
            <ThemedText style={styles.navButtonText}>Previous</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.navButton,
            ]}
            onPress={nextStep}
          >
            <ThemedText style={styles.navButtonText}>
              {currentStep === guide.steps.length - 1 ? 'Complete' : 'Next'}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>

      <ThemedView style={styles.warningsSection}>
        <ThemedText type="subtitle" style={styles.warningsTitle}>
          ⚠️ Important Warnings
        </ThemedText>
        <View style={styles.listContainer}>
          {guide.warnings.map((warning, index) => (
            <View key={index} style={styles.warningItem}>
              <ThemedText style={styles.warningBullet}>⚠️</ThemedText>
              <ThemedText style={styles.warningText}>{warning}</ThemedText>
            </View>
          ))}
        </View>
      </ThemedView>

      <View style={styles.footer}>
        <ThemedText style={styles.footerText}>
          ℹ️ This app provides basic first aid information. Always seek professional medical help
          for serious injuries or emergencies. Call emergency services 911 in US immediately for
          life-threatening situations.
        </ThemedText>
      </View>
    </ScrollView>
  );
}
