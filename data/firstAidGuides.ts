
//database
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

//English version
// export const firstAidGuides: FirstAidGuide[] = [
//   {
//     id: '1',
//     title: 'Burns',
//     category: 'Injuries',
//     description: 'Quick response to burn injuries can prevent major damage',
//     symptoms: [
//       'Red or blistered skin',
//       'Pain and swelling',
//       'Burned or white skin (severe)',
//     ],
//     safetyPreparation: [
//       {
//         title: ' Wash Your Hands',
//         explanation: 'Wash your hands thoroughly with soap and water before providing first aid. This prevents infection.',
//         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🧤 Wear Gloves',
//         explanation: 'Put on disposable gloves to protect both yourself and the patient. This is very important!',
//         image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
//       },
//       {
//         title: '⚠️ Ensure Safety',
//         explanation: 'Make sure the environment is safe. Remove the person from heat source if there\'s fire or heat.',
//         image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop',
//       },
//     ],
//     steps: [
//       {
//         title: 'Stop the burning',
//         explanation: 'Remove the person from the heat source immediately to stop the burning from continuing. If it\'s fire, extinguish the fire if possible. If it\'s chemicals, remove affected clothing and flush chemicals from the skin.',
//         image: 'https://images.unsplash.com/photo-1587973714300-c8407e82c857?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Cool the burn',
//         explanation: 'Pour cool (not cold) water on the burned area for 10-20 minutes. This reduces heat and relieves pain. Do not use ice or hot water.',
//         image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Remove items',
//         explanation: 'Remove jewelry, rings, or clothing stuck to the burned area before swelling increases. This prevents further pressure on the injured area.',
//         image: 'https://images.unsplash.com/photo-1585421514473-b5e31b0c50d1?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Cover the burn',
//         explanation: 'Cover the burned area with a clean dry cloth or sterile bandage. This protects from dirt and helps reduce pain. Do not use cotton or sticky materials.',
//         image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Relieve pain',
//         explanation: 'If pain is severe, give over-the-counter pain medication like acetaminophen. Do not give medication to children without doctor\'s advice.',
//         image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Seek help',
//         explanation: 'For severe or large burns, call emergency services immediately. Burns on the face, hands, or sensitive areas require immediate attention.',
//         image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
//       },
//     ],
//     warnings: [
//       'Do not apply ice directly to burns',
//       'Do not apply butter, oil, or ointment',
//       'Do not pop blisters',
//       'Seek medical help immediately for burns larger than 3 inches or on face',
//     ],
//     icon: '🔥',
//   },
//   {
//     id: '2',
//     title: 'Cuts and Wounds',
//     category: 'Injuries',
//     description: 'Proper wound care prevents infection and promotes healing',
//     symptoms: [
//       'Bleeding',
//       'Pain',
//       'Visible cut or wound',
//     ],
//     safetyPreparation: [
//       {
//         title: ' Wash Your Hands',
//         explanation: 'Wash your hands thoroughly with soap and water before providing first aid. This prevents infection.',
//         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🧤 Wear Gloves',
//         explanation: 'Put on disposable gloves to protect both yourself and the patient from blood and germs.',
//         image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🩹 Prepare Materials',
//         explanation: 'Get clean cloth, bandages, antiseptic, and water ready before starting treatment.',
//         image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=200&fit=crop',
//       },
//     ],
//     steps: [
//       {
//         title: 'Stop bleeding',
//         explanation: 'Apply direct pressure to the wound with a clean cloth. Elevate the injured area above heart level if possible.',
//         image: 'https://images.unsplash.com/photo-1576091160570-2173dba999ef?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Clean wound',
//         explanation: 'Wash the wound with clean water and soap. Remove any dirt but do not use harsh chemicals that may hurt.',
//         image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Apply antiseptic',
//         explanation: 'Apply antibiotic ointment or antiseptic to the wound. This prevents infection.',
//         image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Cover wound',
//         explanation: 'Place a clean bandage or gauze on the wound. Change frequently to avoid infection.',
//         image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Keep clean',
//         explanation: 'Change bandage daily and watch for signs of infection like swelling or redness.',
//         image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Monitor',
//         explanation: 'Monitor the wound for several days. Seek medical help if the wound is large or shows signs of infection.',
//         image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
//       },
//     ],
//     warnings: [
//       'Large cuts may need stitches - seek medical help',
//       'Do not remove embedded objects',
//       'If bleeding doesn\'t stop after 10 minutes of pressure, seek help',
//       'Watch for infection signs: swelling, fever, redness, pus',
//     ],
//     icon: '🩹',
//   },
//   {
//     id: '3',
//     title: 'Choking',
//     category: 'Emergency',
//     description: 'Quick action is crucial for choking victims',
//     symptoms: [
//       'Inability to speak or cough',
//       'Difficulty breathing',
//       'Lips turning blue',
//       'Loss of consciousness',
//     ],
//     safetyPreparation: [
//       {
//         title: ' Wash Your Hands',
//         explanation: 'Wash your hands thoroughly with soap and water. Choking emergencies happen quickly.',
//         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🧤 Wear Gloves',
//         explanation: 'Put on disposable gloves to protect yourself from saliva and potential contact with body fluids.',
//         image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
//       },
//       {
//         title: '📞 Know Emergency Number',
//         explanation: 'Be ready to call 911 immediately if needed. Know the emergency number in your country.',
//         image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
//       },
//     ],
//     steps: [
//       {
//         title: 'Encourage coughing',
//         explanation: 'If they can cough, let them try to cough on their own. Do not slap on the back.',
//         image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Perform Heimlich maneuver',
//         explanation: 'Stand behind the person, place one hand above the navel. Make a fist with the other hand, then make upward and inward thrusts 5-6 times.',
//         image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Repeat',
//         explanation: 'If object is not dislodged, repeat back blows and abdominal thrusts for up to 1 minute.',
//         image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Call 911',
//         explanation: 'If object is not dislodged after 1 minute, call emergency services.',
//         image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
//       },
//     ],
//     warnings: [
//       'Do not slap back for conscious adults',
//       'Use chest thrusts instead of abdominal for pregnant women',
//       'Be ready to perform CPR',
//       'Call emergency services if unsure',
//     ],
//     icon: '🚨',
//   },
//   {
//     id: '4',
//     title: 'Broken Bones and Sprains',
//     category: 'Injuries',
//     description: 'Immobilization prevents further injury',
//     symptoms: [
//       'Severe pain',
//       'Swelling',
//       'Inability to use limb',
//       'Bruising',
//       'Deformity',
//     ],
//     safetyPreparation: [
//       {
//         title: ' Wash Your Hands',
//         explanation: 'Wash your hands thoroughly with soap and water before providing first aid.',
//         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🧤 Wear Gloves',
//         explanation: 'Put on disposable gloves to protect both yourself and the patient.',
//         image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
//       },
//       {
//         title: '📋 Prepare Area',
//         explanation: 'Find a comfortable and safe place to treat the injured. Have bandages and cloth ready.',
//         image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
//       },
//     ],
//     steps: [
//       {
//         title: 'Stop the movement',
//         explanation: 'Restrict the injured limb from moving further. Do not try to straighten a broken bone.',
//         image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
//       },
//       {
//         title: 'Apply ice',
//         explanation: 'Apply ice wrapped in cloth to the injury for 15-20 minutes. This reduces swelling and pain.',
//         image: 'https://images.unsplash.com/photo-1615461066159-fea0039167b9?w=300&h=200&fit=crop',
//       },
//       {
//         title: 'Wrap injury',
//         explanation: 'Use an elastic bandage to wrap the injury to reduce swelling. Do not wrap too tightly.',
//         image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=200&fit=crop',
//       },
//       {
//         title: 'Elevate limb',
//         explanation: 'Elevate the affected limb above heart level if possible. This reduces swelling.',
//         image: 'https://images.unsplash.com/photo-1579759889180-0a2f6e1d1d51?w=300&h=200&fit=crop',
//       },
//       {
//         title: 'Rest the injury',
//         explanation: 'Avoid using the affected limb. Allow it to heal naturally by keeping it immobilized.',
//         image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=200&fit=crop',
//       },
//       {
//         title: 'Seek medical evaluation',
//         explanation: 'Seek medical help for severe injuries or loss of limb function. X-rays may be needed.',
//         image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
//       },
//     ],
//     warnings: [
//       'Do not move the injured limb excessively',
//       'Do not apply ice directly to skin',
//       'Seek emergency care for severe fractures',
//       'X-rays are needed to confirm fractures',
//     ],
//     icon: '🦴',
//   },
//   {
//     id: '5',
//     title: 'Poisoning',
//     category: 'Emergency',
//     description: 'Quick action reduces the effects of poisoning',
//     symptoms: [
//       'Nausea or vomiting',
//       'Abdominal pain',
//       'Dizziness',
//       'Difficulty breathing',
//       'Confusion',
//     ],
//     safetyPreparation: [
//       {
//         title: ' Wash Your Hands',
//         explanation: 'Wash your hands thoroughly with soap and water before providing first aid to poisoning victims.',
//         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🧤 Wear Gloves',
//         explanation: 'Put on disposable gloves to avoid contact with poisonous substances or contaminated materials.',
//         image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
//       },
//       {
//         title: '📱 Have Phone Ready',
//         explanation: 'Have a phone or emergency number readily available. Poisoning emergencies require immediate professional help.',
//         image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
//       },
//     ],
//     steps: [
//       {
//         title: 'Call Poison Control',
//         explanation: 'Call immediately for expert advice. In the US, call 1-800-222-1222.',
//         image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Identify poison',
//         explanation: 'Describe what was ingested, amount, and time. This helps experts determine action to take.',
//         image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Remove from source',
//         explanation: 'If inhalation, remove person to fresh air. If skin contact, remove contaminated clothing.',
//         image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Do not induce vomiting',
//         explanation: 'Vomiting often makes things worse. Wait for professional advice.',
//         image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Follow instructions',
//         explanation: 'Follow Poison Control instructions carefully. They will guide proper steps.',
//         image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Seek emergency care',
//         explanation: 'If symptoms worsen, go to hospital immediately.',
//         image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
//       },
//     ],
//     warnings: [
//       'Do not assume it is not serious',
//       'Keep poison container for reference',
//       'Call Poison Control Center (1-800-222-1222 in US)',
//       'Do not give food or drink without instructions',
//     ],
//     icon: '☠️',
//   },
//   {
//     id: '6',
//     title: 'Severe Bleeding',
//     category: 'Emergency',
//     description: 'Controlling severe bleeding saves lives',
//     symptoms: [
//       'Rapid blood loss',
//       'Blood spurting from wound',
//       'Fainting',
//       'Pale skin',
//       'Rapid heartbeat',
//     ],
//     safetyPreparation: [
//       {
//         title: ' Wash Your Hands',
//         explanation: 'Wash your hands thoroughly with soap and water before providing first aid.',
//         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🧤 Wear Gloves',
//         explanation: 'Put on disposable gloves immediately to protect yourself from blood-borne pathogens.',
//         image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
//       },
//       {
//         title: '📞 Call Emergency',
//         explanation: 'Have a phone ready or someone nearby to call 911 immediately for severe bleeding.',
//         image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
//       },
//     ],
//     steps: [
//       {
//         title: 'Call 911',
//         explanation: 'Call emergency services immediately. They will guide you through steps to take.',
//         image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Apply pressure',
//         explanation: 'Use a clean cloth to apply direct pressure to the wound. Maintain firm pressure.',
//         image: 'https://images.unsplash.com/photo-1576091160570-2173dba999ef?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Elevate',
//         explanation: 'Elevate the bleeding area above heart level if possible.',
//         image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Apply bandage',
//         explanation: 'Once bleeding slows, apply a bandage around the wound.',
//         image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Continue pressure',
//         explanation: 'Do not remove bandage to check. Continue pressure until help arrives.',
//         image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
//       },
//       {
//         title: 'Watch for shock',
//         explanation: 'Watch for shock symptoms like fainting, pale skin, rapid breathing.',
//         image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
//       },
//     ],
//     warnings: [
//       'Do not remove embedded objects',
//       'Continuous pressure is essential',
//       'Call emergency services for uncontrolled bleeding',
//       'Watch for shock symptoms: fainting, pale skin, rapid breathing',
//     ],
//     icon: '🩸',
//   },
//   {
//     id: '7',
//     title: 'Head Injury',
//     category: 'Emergency',
//     description: 'Head injuries require careful monitoring',
//     symptoms: [
//       'Loss of consciousness or confusion',
//       'Severe headache',
//       'Nausea or vomiting',
//       'Clear fluid from nose or ears',
//       'Memory loss',
//     ],
//     safetyPreparation: [
//       {
//         title: ' Wash Your Hands',
//         explanation: 'Wash your hands thoroughly with soap and water before providing first aid.',
//         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🧤 Wear Gloves',
//         explanation: 'Put on disposable gloves to protect both yourself and the patient.',
//         image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
//       },
//       {
//         title: '📋 Prepare Area',
//         explanation: 'Find a safe place to treat the injured. Have bandages and cloth ready.',
//         image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
//       },
//     ],
//     steps: [
//       {
//         title: 'Call 911',
//         explanation: 'Especially for severe symptoms. Call emergency services immediately.',
//         image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911',
//       },
//       {
//         title: 'Do not move',
//         explanation: 'Prevent movement of head and neck to avoid further injury.',
//         image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Do+Not+Move',
//       },
//       {
//         title: 'Monitor breathing',
//         explanation: 'Be ready to perform CPR if person cannot breathe.',
//         image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Monitor+Breathing',
//       },
//       {
//         title: 'Weka joto',
//         explanation: 'Funika mtu kwa blanketi ili kuepuka baridi.',
//         image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Weka+Joto',
//       },
//       {
//         title: 'Tuliza',
//         explanation: 'Tuliza mtu na umfanye atulie. Mpeleke hospitali haraka.',
//         image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Tuliza+Mtu',
//       },
//       {
//         title: 'Note symptoms',
//         explanation: 'Tell emergency responders what happened and all symptoms.',
//         image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Note+Symptoms',
//       },
//     ],
//     warnings: [
//       'Do not move person with neck injury',
//       'Loss of consciousness requires emergency care',
//       'Concussions require medical evaluation',
//       'Watch for new symptoms appearing hours later',
//     ],
//     icon: '🧠',
//   },
//   {
//     id: '8',
//     title: 'Heart Attack',
//     category: 'Emergency',
//     description: 'Quick action can save lives during a heart attack',
//     symptoms: [
//       'Chest pain or pressure',
//       'Difficulty breathing',
//       'Pain radiating to arm or jaw',
//       'Cold sweat',
//       'Nausea',
//     ],
//     safetyPreparation: [
//       {
//         title: ' Wash Your Hands',
//         explanation: 'Wash your hands thoroughly with soap and water before providing first aid.',
//         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🧤 Wear Gloves',
//         explanation: 'Put on disposable gloves to protect both yourself and the patient.',
//         image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
//       },
//       {
//         title: '📞 Call Emergency',
//         explanation: 'Have a phone ready or someone nearby to call 911 immediately.',
//         image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
//       },
//     ],
//     steps: [
//       {
//         title: 'Call 911 immediately',
//         explanation: 'Do not wait. Call emergency services immediately.',
//         image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911+Immediately',
//       },
//       {
//         title: 'Sit or lie down',
//         explanation: 'Calm the person and have them rest. Do not let them walk.',
//         image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Sit+or+Lie+Down',
//       },
//       {
//         title: 'Give aspirin',
//         explanation: 'Chew 325mg aspirin (do not give if allergic).',
//         image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Give+Aspirin',
//       },
//       {
//         title: 'Find AED',
//         explanation: 'Look for an Automated External Defibrillator.',
//         image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Find+AED',
//       },
//       {
//         title: 'Loosen tight clothing',
//         explanation: 'Remove tight clothing to ease breathing.',
//         image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Loosen+Clothing',
//       },
//       {
//         title: 'Be ready to perform CPR',
//         explanation: 'Learn CPR if you haven\'t already.',
//         image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Be+Ready+for+CPR',
//       },
//     ],
//     warnings: [
//       'Do not delay calling emergency services',
//       'Symptoms may vary - women may have different signs',
//       'Do not give medication unless directed by 911',
//       'Time is critical - every minute counts',
//     ],
//     icon: '❤️',
//   },
//   {
//     id: '12',
//     title: 'Drowning',
//     category: 'Emergency',
//     description: 'Time is critical in water rescue situations',
//     symptoms: [
//       'Loss of consciousness',
//       'Blue lips',
//       'No breathing',
//       'Weak or no pulse',
//     ],
//     safetyPreparation: [
//       {
//         title: ' Wash Your Hands',
//         explanation: 'Wash your hands thoroughly with soap and water before providing first aid.',
//         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
//       },
//       {
//         title: '🧤 Wear Gloves',
//         explanation: 'Put on disposable gloves to protect both yourself and the patient.',
//         image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
//       },
//       {
//         title: '📞 Call Emergency',
//         explanation: 'Have a phone ready or someone nearby to call 911 immediately.',
//         image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
//       },
//     ],
//     steps: [
//       {
//         title: 'Remove from water',
//         explanation: 'Remove person from water safely. Do not put yourself in danger.',
//         image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Remove+From+Water',
//       },
//       {
//         title: 'Call 911',
//         explanation: 'Call emergency services immediately.',
//         image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Call+911',
//       },
//       {
//         title: 'Clear mouth',
//         explanation: 'Remove any debris from the mouth.',
//         image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Clear+Mouth',
//       },
//       {
//         title: 'Perform CPR',
//         explanation: 'Begin CPR if no breathing or pulse.',
//         image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Fanya+CPR',
//       },
//       {
//         title: 'Recovery position',
//         explanation: 'If breathing, place in recovery position.',
//         image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Recovery+Position',
//       },
//       {
//         title: 'Maintain warmth',
//         explanation: 'Remove wet clothes and cover with blanket.',
//         image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Maintain+Warmth',
//       },
//     ],
//     warnings: [
//       'Do not put yourself in danger to rescue someone',
//       'Secondary drowning can occur hours later',
//       'Seek medical help after any water rescue',
//       'Learn CPR and basic water rescue',
//     ],
//     icon: '💧',
//   },
// ];

//swahili version
export const firstAidGuides: FirstAidGuide[] = [
  {
    id: '1',
    title: 'Kuungua',
    category: 'Majeraha',
    description: 'Jibu la haraka kwa majeraha ya kuungua linaweza kuzuia uharibifu mkubwa',
    symptoms: [
      'Ngozi nyekundu au yenye malengelenge',
      'Maumivu na uvimbe',
      'Ngozi iliyochomwa au nyeupe (kali)',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa huduma ya kwanza. ',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: ' Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na aliepata ajali ya moto .',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: ' Hakikisha Usalama',
        explanation: 'Hakikisha mazingira ni salama. Mwondoe mtu kutoka chanzo cha Moto kama kuna moto au joto.',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Zima motot na muondoe na eneo la moto',
        explanation: 'Mwondoe mtu kutoka chanzo cha joto mara moja ili kusimamisha kuungua kuendelea. Kama ni moto, zima moto ikiwezekana. Kama ni kemikali, vua nguo zilizoathiriwa na suuza kemikali kutoka ngozini.',
        image: 'https://images.unsplash.com/photo-1587973714300-c8407e82c857?w=300&h=280&fit=crop',
      },
      {
        title: 'Poza jeraha',
        explanation: 'Mimina maji baridi (si barafu) kwenye eneo lililochomwa kwa dakika 10-20. Hii inapunguza joto na kutuliza maumivu. Usitumie barafu au maji ya moto.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Ondoa vitu',
        explanation: 'Ondoa mapambo, pete, au nguo zilizoshikamana na eneo lililochomwa kabla ya uvimbe kuongezeka. Hii inazuia shinikizo zaidi kwenye eneo lililojeruhiwa.',
        image: 'https://images.unsplash.com/photo-1585421514473-b5e31b0c50d1?w=300&h=280&fit=crop',
      },
      {
        title: 'Funika jeraha',
        explanation: 'Funika eneo lililochomwa kwa kitambaa safi kikavu au bandeji ya kuzaa. Hii inalinda kutoka uchafu na husaidia kupunguza maumivu. Usitumie pamba au vifaa vya kunata.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
      {
        title: 'Tuliza maumivu',
        explanation: 'Kama maumivu ni makali, toa dawa ya maumivu bila dawa ya daktari kama acetaminophen. Usitoe dawa kwa watoto bila ushauri wa daktari.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Tafuta msaada',
        explanation: 'Kwa majeraha makali au makubwa ya kuungua, piga simu huduma za dharura mara moja. Majeraha ya uso, mikono, au maeneo nyeti yanahitaji umakini wa haraka.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usitumie barafu moja kwa moja kwenye majeraha ya kuungua',
      'Usitumie siagi, mafuta, au marashi',
      'Usipasue malengelenge',
      'Tafuta msaada wa daktari mara moja kwa majeraha makubwa kuliko inchi 3 au kwenye uso',
    ],
    icon: '🔥',
  },
  {
    id: '2',
    title: 'Makata na Majeraha',
    category: 'Majeraha',
    description: 'Utunzaji sahihi wa jeraha unazuia maambukizi na kukuza uponyaji',
    symptoms: [
      'Kutoka damu',
      'Maumivu',
      'Jeraha au kata inayoonekana',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza. Hii inazuia maambukizi.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa kutoka damu na vijidudu.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '🩹 Andaa Vifaa',
        explanation: 'Pata kitambaa safi, bandeji, antiseptiki, na maji tayari kabla ya kuanza matibabu.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Zuiakutoka kwa damu',
        explanation: 'Weka shinikizo moja kwa moja kwenye jeraha kwa kitambaa safi. Inua eneo lililojeruhiwa juu ya kiwango cha moyo ikiwezekana.',
        image: 'https://images.unsplash.com/photo-1576091160570-2173dba999ef?w=300&h=280&fit=crop',
      },
      {
        title: 'Safisha jeraha kwa maji ya baridi',
        explanation: 'Osha jeraha kwa maji safi na sabuni. Ondoa uchafu wowote lakini usitumie kemikali kali zinazoweza kudhuru.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Weka antiseptiki',
        explanation: 'Weka marashi ya antibiotic au antiseptiki kwenye jeraha. Hii inazuia maambukizi.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Funika jeraha',
        explanation: 'Weka bandeji safi au gauze kwenye jeraha. Badilisha mara kwa mara ili kuepuka maambukizi.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
      {
        title: 'Weka safi',
        explanation: 'Badilisha bandeji kila siku na angalia dalili za maambukizi kama uvimbe au uwekundu.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Fuatilia',
        explanation: 'Fuatilia jeraha kwa siku kadhaa. Tafuta msaada wa daktari kama jeraha ni kubwa au linaonyesha dalili za maambukizi.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Makata makubwa yanaweza kuhitaji kushonwa - tafuta msaada wa daktari',
      'Usiondoe vitu vilivyoingia ndani ya jeraha',
      'Kama damu haikusimama baada ya dakika 10 za shinikizo, tafuta msaada',
      'Angalia dalili za maambukizi: uvimbe, homa, uwekundu, usaha',
    ],
    icon: '🩹',
  },
  {
    id: '3',
    title: 'Kukaba Koo',
    category: 'Dharura',
    description: 'Hatua ya haraka ni muhimu kwa watu wanaokabwa',
    symptoms: [
      'Kushindwa kusema au kukohoa',
      'Ugumu wa kupumua',
      'Midomo kugeuka buluu',
      'Kupoteza fahamu',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji. Dharura za kukabwa hutokea haraka.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda nafsi yako kutoka mate na kuwasiliana na majimaji ya mwili.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Jua Nambari ya Dharura',
        explanation: 'Kuwa tayari kupiga simu 911 mara moja ikihitajika. Jua nambari ya dharura katika nchi yako.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Himiza kukohoa',
        explanation: 'Kama wanaweza kukohoa, waache wajaribu kukohoa wenyewe. Usipige mgongoni.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Fanya mbinu ya Heimlich',
        explanation: 'Simama nyuma ya mtu, weka mkono mmoja juu ya kitovu. Fanya ngumi kwa mkono mwingine, kisha fanya msukumo wa juu na ndani mara 5-6.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Rudia',
        explanation: 'Kama kitu hakijatoka, rudia kupiga mgongoni na msukumo wa tumbo kwa hadi dakika 1.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Piga simu 911',
        explanation: 'Kama kitu hakijatoka baada ya dakika 1, piga simu huduma za dharura.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usipige mgongo kwa watu wazima wenye fahamu',
      'Tumia msukumo wa kifua badala ya tumbo kwa wanawake wajawazito',
      'Kuwa tayari kufanya CPR',
      'Piga simu huduma za dharura kama huna uhakika',
    ],
    icon: '🚨',
  },
  {
    id: '4',
    title: 'Mifupa Iliyovunjika na Michubuko',
    category: 'Majeraha',
    description: 'Kukinga harakati kunazuia majeraha zaidi',
    symptoms: [
      'Maumivu makali',
      'Uvimbe',
      'Kushindwa kutumia kiungo',
      'Michubuko',
      'Umbo lisilo la kawaida',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📋 Andaa Eneo',
        explanation: 'Tafuta mahali salama na pazuri pa kumtibu mtu aliyejeruhiwa. Kuwa na bandeji na kitambaa tayari.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Simamisha harakati',
        explanation: 'Zuia kiungo kilichojeruhiwa kisiendelee kusogea. Usijaribu kunyoosha mfupa uliovunjika.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
      {
        title: 'Weka barafu',
        explanation: 'Weka barafu iliyofunikwa na kitambaa kwenye jeraha kwa dakika 15-20. Hii inapunguza uvimbe na maumivu.',
        image: 'https://images.unsplash.com/photo-1615461066159-fea0039167b9?w=300&h=200&fit=crop',
      },
      {
        title: 'Funga jeraha',
        explanation: 'Tumia bandeji ya elastic kufunga jeraha ili kupunguza uvimbe. Usifunge kwa nguvu sana.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=200&fit=crop',
      },
      {
        title: 'Inua kiungo',
        explanation: 'Inua kiungo kilichoathiriwa juu ya kiwango cha moyo ikiwezekana. Hii inapunguza uvimbe.',
        image: 'https://images.unsplash.com/photo-1579759889180-0a2f6e1d1d51?w=300&h=200&fit=crop',
      },
      {
        title: 'Pumzisha jeraha',
        explanation: 'Epuka kutumia kiungo kilichoathiriwa. Acha kipone kwa asili kwa kukikinga kisogee.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=200&fit=crop',
      },
      {
        title: 'Tafuta tathmini ya daktari',
        explanation: 'Tafuta msaada wa daktari kwa majeraha makali au kupoteza utendaji wa kiungo. X-rays zinaweza kuhitajika.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
    ],
    warnings: [
      'Usisogeze kiungo kilichojeruhiwa kupita kiasi',
      'Usitumie barafu moja kwa moja kwenye ngozi',
    ],
    icon: '🦴',
  },
  {
    id: '5',
    title: 'Sumu',
    category: 'Dharura',
    description: 'Hatua ya haraka inapunguza madhara ya sumu',
    symptoms: [
      'Kichefuchefu au kutapika',
      'Maumivu ya tumbo',
      'Kizunguzungu',
      'Ugumu wa kupumua',
      'Mkanganyiko',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza kwa waathirika wa sumu.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: ' Vaa Glavu kama huna tumia mfuko wa plastiki mlaini ',
        explanation: 'Vaa glavu za kutupa ili kuepuka kuwasiliana na vitu vya sumu au vifaa vilivyochafuliwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📱 Kuwa na Simu Tayari',
        explanation: 'Kuwa na simu au nambari ya dharura tayari. Dharura za sumu zinahitaji msaada wa kitaalamu wa haraka.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Piga Simu Kituo cha Sumu',
        explanation: 'Piga simu mara moja kwa ushauri wa wataalamu. Nchini Marekani, piga 1-800-222-1222.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
      {
        title: 'Mwondoe kutoka chanzo',
        explanation: 'Kama ni pumzi, mwondoe mtu kwenye hewa safi. Kama ni mguso wa ngozi, vua nguo zilizochafuliwa.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Usisababishe kutapika',
        explanation: 'Kutapika mara nyingi hufanya mambo kuwa mabaya zaidi. Subiri ushauri wa kitaalamu.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Fuata maelekezo',
        explanation: 'Fuata maelekezo ya Kituo cha Sumu kwa makini. Watakuongoza hatua sahihi.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Tafuta huduma ya dharura',
        explanation: 'Kama dalili zinazidi, nenda hospitalini mara moja.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usidhani si hatari',
      'Hifadhi chombo cha sumu kwa marejeo',
      'Piga Simu Kituo cha Sumu (1-800-222-1222 Marekani)',
      'Usitoe chakula au kinywaji bila maelekezo',
    ],
    icon: '☠️',
  },
  {
    id: '6',
    title: 'Kutoka Damu Nyingi',
    category: 'Dharura',
    description: 'Kudhibiti kutoka damu nyingi kunaokoa maisha',
    symptoms: [
      'Kupoteza damu haraka',
      'Damu inayotoka kwa nguvu kutoka jeraha',
      'Kuzimia',
      'Ngozi ya rangi',
      'Mapigo ya moyo ya haraka',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa mara moja ili kulinda nafsi yako kutoka magonjwa yanayoenezwa na damu.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Piga Simu Dharura',
        explanation: 'Kuwa na simu tayari au mtu karibu wa kupiga 911 mara moja kwa kutoka damu nyingi.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Piga simu 911',
        explanation: 'Piga simu huduma za dharura mara moja. Watakuongoza hatua za kuchukua.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
      {
        title: 'Weka shinikizo',
        explanation: 'Tumia kitambaa safi kuweka shinikizo moja kwa moja kwenye jeraha. Dumisha shinikizo imara.',
        image: 'https://images.unsplash.com/photo-1576091160570-2173dba999ef?w=300&h=280&fit=crop',
      },
      {
        title: 'Inua',
        explanation: 'Inua eneo linalouma juu ya kiwango cha moyo ikiwezekana.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Weka bandeji',
        explanation: 'Damu ikisimama, weka bandeji kuzunguka jeraha.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Endelea na shinikizo',
        explanation: 'Usiondoe bandeji kuangalia. Endelea na shinikizo hadi msaada ufike.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Angalia mshtuko',
        explanation: 'Angalia dalili za mshtuko kama kuzimia, ngozi ya rangi, kupumua haraka.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usiondoe vitu vilivyoingia ndani ya jeraha',
      'Shinikizo la kudumu ni muhimu',
      'Piga simu huduma za dharura kwa kutoka damu kisichosimama',
      'Angalia dalili za mshtuko: kuzimia, ngozi ya rangi, kupumua haraka',
    ],
    icon: '🩸',
  },
  {
    id: '7',
    title: 'Jeraha la Kichwa',
    category: 'Dharura',
    description: 'Majeraha ya kichwa yanahitaji ufuatiliaji wa makini',
    symptoms: [
      'Kupoteza fahamu au mkanganyiko',
      'Maumivu makali ya kichwa',
      'Kichefuchefu au kutapika',
      'Majimaji wazi kutoka puani au masikioni',
      'Kupoteza kumbukumbu',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📋 Andaa Eneo',
        explanation: 'Tafuta mahali salama pa kumtibu mtu aliyejeruhiwa. Kuwa na bandeji na kitambaa tayari.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Piga simu 911',
        explanation: 'Hasa kwa dalili kali. Piga simu huduma za dharura mara moja.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911',
      },
      {
        title: 'Usisogeze',
        explanation: 'Zuia harakati za kichwa na shingo ili kuepuka majeraha zaidi.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Do+Not+Move',
      },
      {
        title: 'Fuatilia kupumua',
        explanation: 'Kuwa tayari kufanya CPR kama mtu hawezi kupumua.',
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
        title: 'Kumbuka dalili',
        explanation: 'Mwambie mhusika wa dharura kilichotokea na dalili zote.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Note+Symptoms',
      },
    ],
    warnings: [
      'Usisogeze mtu mwenye jeraha la shingo',
      'Kupoteza fahamu kunahitaji huduma ya dharura',
      'Mtikisiko wa ubongo unahitaji tathmini ya daktari',
      'Angalia dalili mpya zinazoonekana masaa kadhaa baadaye',
    ],
    icon: '🧠',
  },
  {
    id: '8',
    title: 'Mshtuko wa Moyo',
    category: 'Dharura',
    description: 'Hatua ya haraka inaweza kuokoa maisha wakati wa mshtuko wa moyo',
    symptoms: [
      'Maumivu au msongo wa kifua',
      'Ugumu wa kupumua',
      'Maumivu yanayoenea kwa mkono au taya',
      'Jasho baridi',
      'Kichefuchefu',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Piga Simu Dharura',
        explanation: 'Kuwa na simu tayari au mtu karibu wa kupiga 911 mara moja.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Piga simu 911 mara moja',
        explanation: 'Usisubiri. Piga simu huduma za dharura mara moja.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911+Immediately',
      },
      {
        title: 'Kaa au lala chini',
        explanation: 'Mtulie mtu na umwache apumzike. Usimruhusu kutembea.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Sit+or+Lie+Down',
      },
      {
        title: 'Toa aspirin',
        explanation: 'Tafuna aspirin ya 325mg (usitoe kama ana mzio).',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Give+Aspirin',
      },
      {
        title: 'Tafuta AED',
        explanation: 'Tafuta Kifaa cha Kiotomatiki cha Kuzalisha Umeme wa Moyo.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Find+AED',
      },
      {
        title: 'Legeza nguo nzito',
        explanation: 'Ondoa nguo nzito ili kurahisisha kupumua.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Loosen+Clothing',
      },
      {
        title: 'Kuwa tayari kufanya CPR',
        explanation: 'Jifunze CPR kama bado hujajifunza.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Be+Ready+for+CPR',
      },
    ],
    warnings: [
      'Usichelewesha kupiga simu huduma za dharura',
      'Dalili zinaweza kutofautiana - wanawake wanaweza kuwa na ishara tofauti',
      'Usitoe dawa bila maelekezo ya 911',
      'Wakati ni muhimu - kila dakika inahesabu',
    ],
    icon: '❤️',
  },
  {
    id: '12',
    title: 'Kuzama',
    category: 'Dharura',
    description: 'Wakati ni muhimu sana katika hali za uokoaji majini',
    symptoms: [
      'Kupoteza fahamu',
      'Midomo ya buluu',
      'Kutopumua',
      'Mapigo dhaifu au kutokuwepo kwa mapigo',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Piga Simu Dharura',
        explanation: 'Kuwa na simu tayari au mtu karibu wa kupiga 911 mara moja.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Mwondoe majini',
        explanation: 'Mwondoe mtu majini kwa usalama. Usijitie hatarini mwenyewe.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Remove+From+Water',
      },
      {
        title: 'Piga simu 911',
        explanation: 'Piga simu huduma za dharura mara moja.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Call+911',
      },
      {
        title: 'Safisha kinywa',
        explanation: 'Ondoa uchafu wowote kutoka kinywani.',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Clear+Mouth',
      },
      {
        title: 'Fanya CPR',
        explanation: 'Anza CPR kama hakuna kupumua au mapigo.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Fanya+CPR',
      },
      {
        title: 'Nafasi ya kupumzika',
        explanation: 'Kama anapumua, mweke katika nafasi ya kupumzika.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Recovery+Position',
      },
      {
        title: 'Dumisha joto',
        explanation: 'Vua nguo zenye unyevu na funika kwa blanketi.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Maintain+Warmth',
      },
    ],
    warnings: [
      'Usijitie hatarini kuokoa mtu',
      'Kuzama kwa sekondari kunaweza kutokea masaa kadhaa baadaye',
      'Tafuta msaada wa daktari baada ya uokoaji wowote majini',
      'Jifunze CPR na uokoaji wa msingi majini',
    ],
    icon: '💧',
  },
  {
    id: '13',
    title: 'Mzio Mkali',
    category: 'Dharura',
    description: 'Mzio mkali unaweza kusababisha kupumua kwa shida na unahitaji msaada wa haraka.',
    symptoms: [
      'Kupumua kwa shida',
      'Midomo na uso kuvimba',
      'Kizunguzungu au kutapika',
      'Kichefuchefu au msongamano wa kifua',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono',
        explanation: 'Nawa mikono yako kwa sabuni na maji kabla ya kutoa msaada.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📦 Tazama Dawa',
        explanation: 'Angalia kama mtu ana epinephrine auto-injector au dawa ya mzio kwa dharura.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Piga Simu Dharura',
        explanation: 'Mzio mkali ni dharura. Piga simu huduma za dharura mara moja.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Tafuta dalili',
        explanation: 'Tambua ikiwa ana ugumu wa kupumua, uvimbe wa uso, au kichefuchefu.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Tumia epinephrine',
        explanation: 'Kama mtu ana epinephrine auto-injector, tumia mara moja kama ilivyoonyeshwa.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Kaa pembeni',
        explanation: 'Msaidie mtu kukaa kwa urahisi na mfurahie nafasi ya kupumua.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Toa nguo zinazoathiriwa',
        explanation: 'Legeza nguo ngumu kama shingo, kamba, au mikanda ili kupumua vizuri.',
        image: 'https://images.unsplash.com/photo-1585421514473-b5e31b0c50d1?w=300&h=280&fit=crop',
      },
      {
        title: 'Fuatilia hali',
        explanation: 'Angalia dalili za kuongezeka baada ya kutoa epinephrine.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
      {
        title: 'Endelea kwa msaada',
        explanation: 'Mtaalamu wa matibabu anapaswa kuendelea kutathmini hali hata kama anafanya vyema.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usitumie dawa nyingine bila ushauri wa daktari',
      'Mzio mkali unaweza kurudi hata baada ya kuondoka kwa dalili',
      'Piga simu huduma za dharura hata kama alionyesha dalili baada ya epinephrine',
      'Usiruhusu mtu kuendesha gari hadi afikie hospitali',
    ],
    icon: '⚠️',
  },
  {
    id: '14',
    title: 'Kupoteza Hamu ya Mafuta',
    category: 'Majeraha',
    description: 'Maumivu au kuchomwa kwa ngozi yanahitaji hatua ya haraka ili kuzuia majeraha zaidi.',
    symptoms: [
      'Ngozi nyekundu au ina vibaka',
      'Maumivu au hisia ya kuchoma',
      'Uvujaji wa maji au kemikali',
      'Kuhisi baridi kwa sehemu iliyouma',
    ],
    safetyPreparation: [
      {
        title: ' Safisha mikono',
        explanation: 'Tumia sabuni na maji au kiua vijidudu kabla ya kusaidia.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: 'Vaa kinga',
        explanation: 'Vaa glavu au kinga ya ngozi kabla ya kushughulikia eneo lililouma.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: 'Ondoa chanzo',
        explanation: 'Mwondoe mtu kwa haraka kutoka chanzo cha moto, kemikali, au umeme ikiwa salama.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Barua eneo',
        explanation: 'Mimina maji baridi (si barafu) kwenye eneo lililouma kwa dakika 10-20.',
        image: 'https://images.unsplash.com/photo-1587973714300-c8407e82c857?w=300&h=280&fit=crop',
      },
      {
        title: 'Ondoa vito',
        explanation: 'Ondoa pete, saa, au nguo zinazoweza kushikamana na eneo lililouma.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Funika kwa kitambaa safi',
        explanation: 'Tumia kitambaa safi au bandeji isiyoshikamana ili kulinda eneo.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Epusha bidhaa za nyumbani',
        explanation: 'Usitumie siagi, mafuta, au marashi ambayo yanaweza kusababisha maambukizi.',
        image: 'https://images.unsplash.com/photo-1585421514473-b5e31b0c50d1?w=300&h=280&fit=crop',
      },
      {
        title: 'Tafuta ushauri wa matibabu',
        explanation: 'Kama kuchomwa ni kwa kiwango kikubwa au kwenye uso, piga simu daktari.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
      {
        title: 'Zingatia dalili',
        explanation: 'Angalia dalili za maambukizi kama joto, uvimbe, au mateso ya nguvu.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usitumie barafu moja kwa moja kwenye ngozi iliyouma',
      'Usitumie bidhaa ngumu au za mafuta',
      'Tafuta msaada wa daktari kwa majeraha makubwa',
      'Epuka kugusa eneo kwa mikono chafu',
    ],
    icon: '🔥',
  },
  {
    id: '15',
    title: 'Mshtuko',
    category: 'Dharura',
    description: 'Mshtuko ni hali ya maisha inayoweza kuharibiwa kutokana na mtiririko duni wa damu.',
    symptoms: [
      'Ngozi baridi au yenye unyevu',
      'Kupumua kwa haraka',
      'Mapigo ya moyo ya haraka',
      'Uwezo mdogo wa kuzungumza au kutembea',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono',
        explanation: 'Angalia usafi kabla ya kusaidia, hasa kwa majeraha ya damu.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: 'Kwa tahadhari',
        explanation: 'Tafuta wasaidizi zaidi kama moyo au damu inatoka kwa wingi.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: 'Piga simu ya dharura',
        explanation: 'Mshtuko unahitaji huduma ya haraka. Piga simu 911 au nambari ya dharura.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Lemaza mtu',
        explanation: 'Msaidie mtu kula chini na kuinua miguu juu kidogo kwa kupitisha damu kwenda mwili.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Funika kwa blanketi',
        explanation: 'Dumisha joto la mwili bila kuwasha sana kwa blanketi au nguo nyepesi.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Angalia Upumaiji',
        explanation: 'Thibitisha kama mtu ana pumzi na mapigo. Punguza mgongoni kwa tahadhari.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Usitoe chakula au kinywaji',
        explanation: 'Usimpe chakula au kinywaji kwa mtu aliyeko chini au anayeogopa.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Angalia kumbukumbu',
        explanation: 'Uliza kuhusu dawa za kisasa, mlo, au majeraha yaliyopita.',
        image: 'https://images.unsplash.com/photo-1585421514473-b5e31b0c50d1?w=300&h=280&fit=crop',
      },
      {
        title: 'Taarifu wahudumu wa afya',
        explanation: 'Mtoleze hali ya mtu kwa timu ya dharura ili waweze kutoa matibabu sahihi.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Mshtuko unaweza kuwa mbaya haraka',
      'Usamaha na usaidie kutokana na uvumi wa hiyo hali',
      'Piga simu huduma za dharura mara moja',
      'Usimpe dawa mwenyewe bila maelekezo ya wataalamu',
    ],
    icon: '💊',
  },
];