export interface FirstAidGuide {
  id: string;
  title: string;
  category: string;
  description: string;
  symptoms: string[];
  safetyPreparation: {
    title: string;
    explanation: string;
    image: string;
  }[];
  steps: {
    title: string;
    explanation: string;
    image: string;
  }[];
  warnings: string[];
  icon: string;
}

export const firstAidGuides: FirstAidGuide[] = [
  {
    id: '1',
    title: 'Burns',
    category: 'Injuries',
    description: 'Quick response to burn injuries can prevent major damage',
    symptoms: [
      'Red or blistered skin',
      'Pain and swelling',
      'Burned or white skin (severe)',
    ],
    safetyPreparation: [
      {
        title: '🧼 Wash Your Hands',
        explanation: 'Wash your hands thoroughly with soap and water before providing first aid. This prevents infection.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Wear Gloves',
        explanation: 'Put on disposable gloves to protect both yourself and the patient. This is very important!',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '⚠️ Ensure Safety',
        explanation: 'Make sure the environment is safe. Remove the person from heat source if there\'s fire or heat.',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Stop the burning',
        explanation: 'Remove the person from the heat source immediately to stop the burning from continuing. If it\'s fire, extinguish the fire if possible. If it\'s chemicals, remove affected clothing and flush chemicals from the skin.',
        image: 'https://images.unsplash.com/photo-1587973714300-c8407e82c857?w=300&h=280&fit=crop',
      },
      {
        title: 'Cool the burn',
        explanation: 'Pour cool (not cold) water on the burned area for 10-20 minutes. This reduces heat and relieves pain. Do not use ice or hot water.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Remove items',
        explanation: 'Remove jewelry, rings, or clothing stuck to the burned area before swelling increases. This prevents further pressure on the injured area.',
        image: 'https://images.unsplash.com/photo-1585421514473-b5e31b0c50d1?w=300&h=280&fit=crop',
      },
      {
        title: 'Cover the burn',
        explanation: 'Cover the burned area with a clean dry cloth or sterile bandage. This protects from dirt and helps reduce pain. Do not use cotton or sticky materials.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
      {
        title: 'Relieve pain',
        explanation: 'If pain is severe, give over-the-counter pain medication like acetaminophen. Do not give medication to children without doctor\'s advice.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Seek help',
        explanation: 'For severe or large burns, call emergency services immediately. Burns on the face, hands, or sensitive areas require immediate attention.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Do not apply ice directly to burns',
      'Do not apply butter, oil, or ointment',
      'Do not pop blisters',
      'Seek medical help immediately for burns larger than 3 inches or on face',
    ],
    icon: '🔥',
  },
  {
    id: '2',
    title: 'Cuts and Wounds',
    category: 'Injuries',
    description: 'Proper wound care prevents infection and promotes healing',
    symptoms: [
      'Bleeding',
      'Pain',
      'Visible cut or wound',
    ],
    safetyPreparation: [
      {
        title: '🧼 Wash Your Hands',
        explanation: 'Wash your hands thoroughly with soap and water before providing first aid. This prevents infection.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Wear Gloves',
        explanation: 'Put on disposable gloves to protect both yourself and the patient from blood and germs.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '🩹 Prepare Materials',
        explanation: 'Get clean cloth, bandages, antiseptic, and water ready before starting treatment.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Stop bleeding',
        explanation: 'Apply direct pressure to the wound with a clean cloth. Elevate the injured area above heart level if possible.',
        image: 'https://images.unsplash.com/photo-1576091160570-2173dba999ef?w=300&h=280&fit=crop',
      },
      {
        title: 'Clean wound',
        explanation: 'Wash the wound with clean water and soap. Remove any dirt but do not use harsh chemicals that may hurt.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Apply antiseptic',
        explanation: 'Apply antibiotic ointment or antiseptic to the wound. This prevents infection.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Cover wound',
        explanation: 'Place a clean bandage or gauze on the wound. Change frequently to avoid infection.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
      {
        title: 'Keep clean',
        explanation: 'Change bandage daily and watch for signs of infection like swelling or redness.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Monitor',
        explanation: 'Monitor the wound for several days. Seek medical help if the wound is large or shows signs of infection.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Large cuts may need stitches - seek medical help',
      'Do not remove embedded objects',
      'If bleeding doesn\'t stop after 10 minutes of pressure, seek help',
      'Watch for infection signs: swelling, fever, redness, pus',
    ],
    icon: '🩹',
  },
  {
    id: '3',
    title: 'Choking',
    category: 'Emergency',
    description: 'Quick action is crucial for choking victims',
    symptoms: [
      'Inability to speak or cough',
      'Difficulty breathing',
      'Lips turning blue',
      'Loss of consciousness',
    ],
    safetyPreparation: [
      {
        title: '🧼 Wash Your Hands',
        explanation: 'Wash your hands thoroughly with soap and water. Choking emergencies happen quickly.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Wear Gloves',
        explanation: 'Put on disposable gloves to protect yourself from saliva and potential contact with body fluids.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Know Emergency Number',
        explanation: 'Be ready to call 911 immediately if needed. Know the emergency number in your country.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Encourage coughing',
        explanation: 'If they can cough, let them try to cough on their own. Do not slap on the back.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Perform Heimlich maneuver',
        explanation: 'Stand behind the person, place one hand above the navel. Make a fist with the other hand, then make upward and inward thrusts 5-6 times.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Repeat',
        explanation: 'If object is not dislodged, repeat back blows and abdominal thrusts for up to 1 minute.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Call 911',
        explanation: 'If object is not dislodged after 1 minute, call emergency services.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Do not slap back for conscious adults',
      'Use chest thrusts instead of abdominal for pregnant women',
      'Be ready to perform CPR',
      'Call emergency services if unsure',
    ],
    icon: '🚨',
  },
  {
    id: '4',
    title: 'Broken Bones and Sprains',
    category: 'Injuries',
    description: 'Immobilization prevents further injury',
    symptoms: [
      'Severe pain',
      'Swelling',
      'Inability to use limb',
      'Bruising',
      'Deformity',
    ],
    safetyPreparation: [
      {
        title: '🧼 Wash Your Hands',
        explanation: 'Wash your hands thoroughly with soap and water before providing first aid.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Wear Gloves',
        explanation: 'Put on disposable gloves to protect both yourself and the patient.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📋 Prepare Area',
        explanation: 'Find a comfortable and safe place to treat the injured. Have bandages and cloth ready.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Stop the movement',
        explanation: 'Restrict the injured limb from moving further. Do not try to straighten a broken bone.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
      {
        title: 'Apply ice',
        explanation: 'Apply ice wrapped in cloth to the injury for 15-20 minutes. This reduces swelling and pain.',
        image: 'https://images.unsplash.com/photo-1615461066159-fea0039167b9?w=300&h=200&fit=crop',
      },
      {
        title: 'Wrap injury',
        explanation: 'Use an elastic bandage to wrap the injury to reduce swelling. Do not wrap too tightly.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=200&fit=crop',
      },
      {
        title: 'Elevate limb',
        explanation: 'Elevate the affected limb above heart level if possible. This reduces swelling.',
        image: 'https://images.unsplash.com/photo-1579759889180-0a2f6e1d1d51?w=300&h=200&fit=crop',
      },
      {
        title: 'Rest the injury',
        explanation: 'Avoid using the affected limb. Allow it to heal naturally by keeping it immobilized.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=200&fit=crop',
      },
      {
        title: 'Seek medical evaluation',
        explanation: 'Seek medical help for severe injuries or loss of limb function. X-rays may be needed.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
    ],
    warnings: [
      'Do not move the injured limb excessively',
      'Do not apply ice directly to skin',
      'Seek emergency care for severe fractures',
      'X-rays are needed to confirm fractures',
    ],
    icon: '🦴',
  },
  {
    id: '5',
    title: 'Poisoning',
    category: 'Emergency',
    description: 'Quick action reduces the effects of poisoning',
    symptoms: [
      'Nausea or vomiting',
      'Abdominal pain',
      'Dizziness',
      'Difficulty breathing',
      'Confusion',
    ],
    safetyPreparation: [
      {
        title: '🧼 Wash Your Hands',
        explanation: 'Wash your hands thoroughly with soap and water before providing first aid to poisoning victims.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Wear Gloves',
        explanation: 'Put on disposable gloves to avoid contact with poisonous substances or contaminated materials.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📱 Have Phone Ready',
        explanation: 'Have a phone or emergency number readily available. Poisoning emergencies require immediate professional help.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Call Poison Control',
        explanation: 'Call immediately for expert advice. In the US, call 1-800-222-1222.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
      {
        title: 'Identify poison',
        explanation: 'Describe what was ingested, amount, and time. This helps experts determine action to take.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Remove from source',
        explanation: 'If inhalation, remove person to fresh air. If skin contact, remove contaminated clothing.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Do not induce vomiting',
        explanation: 'Vomiting often makes things worse. Wait for professional advice.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Follow instructions',
        explanation: 'Follow Poison Control instructions carefully. They will guide proper steps.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Seek emergency care',
        explanation: 'If symptoms worsen, go to hospital immediately.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Do not assume it is not serious',
      'Keep poison container for reference',
      'Call Poison Control Center (1-800-222-1222 in US)',
      'Do not give food or drink without instructions',
    ],
    icon: '☠️',
  },
  {
    id: '6',
    title: 'Severe Bleeding',
    category: 'Emergency',
    description: 'Controlling severe bleeding saves lives',
    symptoms: [
      'Rapid blood loss',
      'Blood spurting from wound',
      'Fainting',
      'Pale skin',
      'Rapid heartbeat',
    ],
    safetyPreparation: [
      {
        title: '🧼 Wash Your Hands',
        explanation: 'Wash your hands thoroughly with soap and water before providing first aid.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Wear Gloves',
        explanation: 'Put on disposable gloves immediately to protect yourself from blood-borne pathogens.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Call Emergency',
        explanation: 'Have a phone ready or someone nearby to call 911 immediately for severe bleeding.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Call 911',
        explanation: 'Call emergency services immediately. They will guide you through steps to take.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
      {
        title: 'Apply pressure',
        explanation: 'Use a clean cloth to apply direct pressure to the wound. Maintain firm pressure.',
        image: 'https://images.unsplash.com/photo-1576091160570-2173dba999ef?w=300&h=280&fit=crop',
      },
      {
        title: 'Elevate',
        explanation: 'Elevate the bleeding area above heart level if possible.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Apply bandage',
        explanation: 'Once bleeding slows, apply a bandage around the wound.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Continue pressure',
        explanation: 'Do not remove bandage to check. Continue pressure until help arrives.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Watch for shock',
        explanation: 'Watch for shock symptoms like fainting, pale skin, rapid breathing.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Do not remove embedded objects',
      'Continuous pressure is essential',
      'Call emergency services for uncontrolled bleeding',
      'Watch for shock symptoms: fainting, pale skin, rapid breathing',
    ],
    icon: '🩸',
  },
  {
    id: '7',
    title: 'Head Injury',
    category: 'Emergency',
    description: 'Head injuries require careful monitoring',
    symptoms: [
      'Loss of consciousness or confusion',
      'Severe headache',
      'Nausea or vomiting',
      'Clear fluid from nose or ears',
      'Memory loss',
    ],
    steps: [
      {
        title: 'Call 911',
        explanation: 'Especially for severe symptoms. Call emergency services immediately.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911',
      },
      {
        title: 'Do not move',
        explanation: 'Prevent movement of head and neck to avoid further injury.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Do+Not+Move',
      },
      {
        title: 'Monitor breathing',
        explanation: 'Be ready to perform CPR if person cannot breathe.',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Monitor+Breathing',
      },
      {
        title: 'Weka joto',
        explanation: 'Funika mtu kwa blanketi ili kuepuka baridi.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Weka+Joto',
      },
      {
        title: 'Tuliza',
        explanation: 'Tuliza mtu na umfanye atulie. Mpeleke hospitali haraka.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Tuliza+Mtu',
      },
      {
        title: 'Note symptoms',
        explanation: 'Tell emergency responders what happened and all symptoms.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Note+Symptoms',
      },
    ],
    warnings: [
      'Do not move person with neck injury',
      'Loss of consciousness requires emergency care',
      'Concussions require medical evaluation',
      'Watch for new symptoms appearing hours later',
    ],
    icon: '🧠',
  },
  {
    id: '8',
    title: 'Heart Attack',
    category: 'Emergency',
    description: 'Quick action can save lives during a heart attack',
    symptoms: [
      'Chest pain or pressure',
      'Difficulty breathing',
      'Pain radiating to arm or jaw',
      'Cold sweat',
      'Nausea',
    ],
    steps: [
      {
        title: 'Call 911 immediately',
        explanation: 'Do not wait. Call emergency services immediately.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911+Immediately',
      },
      {
        title: 'Sit or lie down',
        explanation: 'Calm the person and have them rest. Do not let them walk.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Sit+or+Lie+Down',
      },
      {
        title: 'Give aspirin',
        explanation: 'Chew 325mg aspirin (do not give if allergic).',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Give+Aspirin',
      },
      {
        title: 'Find AED',
        explanation: 'Look for an Automated External Defibrillator.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Find+AED',
      },
      {
        title: 'Loosen tight clothing',
        explanation: 'Remove tight clothing to ease breathing.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Loosen+Clothing',
      },
      {
        title: 'Be ready to perform CPR',
        explanation: 'Learn CPR if you haven\'t already.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Be+Ready+for+CPR',
      },
    ],
    warnings: [
      'Do not delay calling emergency services',
      'Symptoms may vary - women may have different signs',
      'Do not give medication unless directed by 911',
      'Time is critical - every minute counts',
    ],
    icon: '❤️',
  },
  {
    id: '9',
    title: 'Allergic Reaction',
    category: 'Emergency',
    description: 'Severe allergic reactions can be life-threatening',
    symptoms: [
      'Difficulty breathing',
      'Swelling of face, lips, or throat',
      'Hives or rash',
      'Fainting',
      'Rapid heartbeat',
    ],
    steps: [
      {
        title: 'Call 911',
        explanation: 'For severe reaction. Call emergency services immediately.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911',
      },
      {
        title: 'Use EpiPen',
        explanation: 'If available, use EpiPen injection immediately.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Use+EpiPen',
      },
      {
        title: 'Position person',
        explanation: 'Lay person down and elevate feet if possible.',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Position+Person',
      },
      {
        title: 'Monitor',
        explanation: 'Monitor breathing and consciousness. Be prepared to perform CPR.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Monitor+Person',
      },
      {
        title: 'Dozi ya pili',
        explanation: 'Tumia EpiPen ya pili baada ya dakika 5-15 ikiwa inahitajika.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Dozi+ya+Pili',
      },
      {
        title: 'Uangalifu wa hospitali',
        explanation: 'Nenda hospitali baada ya kutumia EpiPen.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Uangalifu+wa+Hospitali',
      },
    ],
    warnings: [
      'Anaphylaxis is a medical emergency',
      'Do not assume it will pass on its own',
      'Go to hospital after using EpiPen',
      'Carry your medications if you have severe allergies',
    ],
    icon: '⚠️',
  },
  {
    id: '10',
    title: 'CPR - Cardiopulmonary Resuscitation',
    category: 'Emergency',
    description: 'CPR restores blood flow when a person has stopped breathing',
    symptoms: [
      'Loss of consciousness',
      'No breathing',
      'No heartbeat',
    ],
    steps: [
      {
        title: 'Call 911',
        explanation: 'Call emergency services immediately.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911',
      },
      {
        title: 'Position person',
        explanation: 'Place person on their back on a firm surface.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Position+Person',
      },
      {
        title: 'Position hands',
        explanation: 'Place the heel of one hand in the center of the chest.',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Position+Hands',
      },
      {
        title: 'Perform compressions',
        explanation: 'Push hard and fast at least 2 inches deep.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Perform+Compressions',
      },
      {
        title: 'Compression rate',
        explanation: 'Perform 100-120 compressions per minute.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Compression+Rate',
      },
      {
        title: 'Give breaths',
        explanation: 'Give rescue breaths if trained, or continue compressions.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Give+Breaths',
      },
    ],
    warnings: [
      'Do not stop CPR until help arrives',
      'CPR training is essential',
      'Broken ribs are better than no CPR',
      'Look for AED while performing CPR',
    ],
    icon: '🆘',
  },
  {
    id: '11',
    title: 'Mifupa Iliyovunjika',
    category: 'Injuries',
    description: 'Kuweka sawa ni muhimu kwa uangalizi wa mifupa iliyovunjika',
    symptoms: [
      'Maumivu makali',
      'Uwezo wa kutumia',
      'Kubadilika umbo wazi',
      'Uvimbe na kuchubuka',
    ],
    steps: [
      {
        title: 'Simamisha mwendo',
        explanation: 'Zuia kiungo kilichoathiriwa mara moja. Usijaribu kurekebisha mfupa uliovunjika.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Simamisha+Mwendo',
      },
      {
        title: 'Apply ice',
        explanation: 'Use an ice pack wrapped in cloth.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Apply+Ice',
      },
      {
        title: 'Use support',
        explanation: 'Use a sling or bandage to support the limb.',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Use+Support',
      },
      {
        title: 'Inua',
        explanation: 'Elevate injury above heart level.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Inua+Jeraha',
      },
      {
        title: 'Seek medical help',
        explanation: 'X-rays are needed to confirm fractures.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Seek+Medical+Help',
      },
      {
        title: 'Follow up care',
        explanation: 'Follow doctor\'s instructions for healing.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Follow+Up+Care',
      },
    ],
    warnings: [
      'Do not move severely affected limb',
      'Do not apply ice directly to skin',
      'Proper diagnosis requires X-rays',
      'Seek emergency care for severely broken bones',
    ],
    icon: '🦴',
  },
  {
    id: '12',
    title: 'Drowning',
    category: 'Emergency',
    description: 'Time is critical in water rescue situations',
    symptoms: [
      'Loss of consciousness',
      'Blue lips',
      'No breathing',
      'Weak or no pulse',
    ],
    steps: [
      {
        title: 'Remove from water',
        explanation: 'Remove person from water safely. Do not put yourself in danger.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Remove+From+Water',
      },
      {
        title: 'Call 911',
        explanation: 'Call emergency services immediately.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Call+911',
      },
      {
        title: 'Clear mouth',
        explanation: 'Remove any debris from the mouth.',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Clear+Mouth',
      },
      {
        title: 'Perform CPR',
        explanation: 'Begin CPR if no breathing or pulse.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Fanya+CPR',
      },
      {
        title: 'Recovery position',
        explanation: 'If breathing, place in recovery position.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Recovery+Position',
      },
      {
        title: 'Maintain warmth',
        explanation: 'Remove wet clothes and cover with blanket.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Maintain+Warmth',
      },
    ],
    warnings: [
      'Do not put yourself in danger to rescue someone',
      'Secondary drowning can occur hours later',
      'Seek medical help after any water rescue',
      'Learn CPR and basic water rescue',
    ],
    icon: '💧',
  },
];
