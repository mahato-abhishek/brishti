type locationProps = {
  latitude: number;
  longitude: number;
};

export default async function reverseGeo(coords: locationProps | null) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords?.latitude}&lon=${coords?.longitude}&layer=address`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch cities");
    }
    const data = await res.json();
    console.log(data);
    return data ?? [];
  } catch (error: any) {
    throw new Error("An error occured" + error);
  }
}
