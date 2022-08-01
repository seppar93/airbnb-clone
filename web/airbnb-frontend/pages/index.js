import { sanityClient } from "../sanity";

export default function Home({properties}) {
  console.log(properties);
  return <>test</>;
}

export const getServerSideprops = async () => {
  const query = '*[ _type == "property"]';
  const properties = await sanityClient.fetch(query);

  if (!property.length) {
    return {
      props: {
        properties: [],
      },
    };
  } else {
    return {
      props:{
        properties
      }
    }
  }
};
