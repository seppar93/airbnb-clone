export default {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
        name: "location",
        title: "Location",
        type: "geopoint",
      },
      {
        name: "propertyType",
        title: "Property Type",
        options:{
            list:[
                {
                    title: 'House',
                    value: 'house'
                },
                {
                    title: 'Flat',
                    value: 'flat'
                },
                {
                    title: 'Bed & Breakfest',
                    value: 'bed-and-breakfest'
                },
                {
                    title: 'Boutieque',
                    value: 'bed-and-breakfest'
                },
            ]
        }
      },
      {
        name: "location",
        title: "Location",
        type: "geopoint",
      },
      {
        name: "location",
        title: "Location",
        type: "geopoint",
      },
  ],
};
