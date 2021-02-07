const INITIAL_STATE = [
    {
        id: 1,
        name: "Build a Better Brain at Any Age Hardcover",
        price: 22.20,
        category: "Self help memory improvement",
        description: "Throughout our life, we look for ways to keep our mind sharp and effortlessly productive. Now, globetrotting neurosurgeon Dr. Sanjay Gupta offers insights from top scientists all over the world, whose cutting-edge research can help you heighten and protect brain function and maintain cognitive health at any age."
},
    {
        id : 2,
        name: "The House by the Sea",
        price: 16.99,
        category: "Family",
        description: "*The Top 10 Bestseller*\n" +
            "'A tender, heart-breaking, page-turning read' Rachel Hore\n" +
            "'The perfect combination of page-turning thriller and deeply emotional family story. Superb. Nicola Cornick"
    },
    {
        id : 3,
        name: "The Tea Rose",
        price: 25.63,
        category: "History",
        description: "East London, 1888 - a city apart. A place of shadow and light where thieves, whores, and dreamers mingle, where children play in the cobbled streets by day and a killer stalks at night, where bright hopes meet the darkest truths. Here, by the whispering waters of the Thames, Fiona Finnegan, a worker in a tea factory, hopes to own a shop one day, together with her lifelong love, Joe Bristow, a costermonger's son. With nothing but their faith in each other to spur them on, Fiona and Joe struggle, save, and sacrifice to achieve their dreams. But Fiona's life is shattered when the actions of a dark and brutal man take from her nearly everything - and everyone - she holds dear. Fearing her own death, she is forced to flee London for New York. There, her indomitable spirit propels her rise from a modest West Side shop-front to the top of Manhattan's tea trade. But Fiona's old ghosts do not rest quietly, and to silence them, she must venture back to the London of her childhood, where a deadly confrontation with her past becomes the key to her future."
    }
]

export default (state = INITIAL_STATE, action) => {
   switch (action.type){
       case "ADD_BOOK" :
          if(state.length > 0) {
              return [...state, {
                  id: state[state.length - 1].id + 1,
                  name: action.payload.name,
                  price: action.payload.price,
                  category: action.payload.category,
                  description: action.payload.description
              }]
          } else{
              return [...state, {
                  id: 1,
                  name: action.payload.name,
                  price: action.payload.price,
                  category: action.payload.category,
                  description: action.payload.description
              }]
          }
       case "DELETE_BOOK" :
           let index = state.findIndex((el, i) => el.id === action.payload);
            const new_state = state.filter((value, i) => i !== index);
            return new_state;
       case "EDIT_BOOK_DETAILS" :
           let editIndex = state.findIndex((el, i ) => el.id === action.payload.id);
            const edit_details = [...state];
            edit_details[editIndex] = action.payload;
            return edit_details;
       default:
           return state;
   }
}


