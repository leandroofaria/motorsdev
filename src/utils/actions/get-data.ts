export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/683dc4a9d00aede55f088371?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
    
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}
