// firebaseService.ts
import { ref, push, set, serverTimestamp } from 'firebase/database';
import { db } from './firebaseInit';

export function addQuestToFirebase(position: google.maps.LatLngLiteral, nextQuestKey: string | null = null) {
  const questRef = push(ref(db, 'quests'));
  set(questRef, {
    Location: {
      Lat: position.lat,
      Long: position.lng
    },
    Timestamp: serverTimestamp(),
    Next: nextQuestKey
  });

  return questRef.key;
}

export function updateQuestLocation(key: string, lat: number, long: number) {
  const questRef = ref(db, `quests/${key}`);
  set(questRef, {
    Location: {
      Lat: lat,
      Long: long
    },
    Timestamp: serverTimestamp()
  });
}
