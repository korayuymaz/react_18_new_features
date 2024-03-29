import { useState, useTransition } from "react";
import "./style.css";

const charactersJsonData = [
  {
    id: 0,
    name: "Fresh Avocados",
    image: "/images/musashi.jpeg",
    from: "Spain",
    nutrients: "Vitamin B, Vitamin K",
    quantity: "4 🥑",
    price: "6.50",
    organic: true,
    description:
      "A ripe avocado yields to gentle pressure when held in the palm of the hand and squeezed. The fruit is not sweet, but distinctly and subtly flavored, with smooth texture. The avocado is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content. Generally, avocado is served raw, though some cultivars, including the common 'Hass', can be cooked for a short time without becoming bitter. It is used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.",
  },
  {
    id: 1,
    name: "Goat and Sheep Cheese",
    image: "/images/musashi.jpeg",
    from: "Portugal",
    nutrients: "Vitamin A, Calcium",
    quantity: "250g",
    price: "5.00",
    organic: false,
    description:
      "Creamy and distinct in flavor, goat cheese is a dairy product enjoyed around the world. Goat cheese comes in a wide variety of flavors and textures, from soft and spreadable fresh cheese to salty, crumbly aged cheese. Although it’s made using the same coagulation and separation process as cheese made from cow’s milk, goat cheese differs in nutrient content.",
  },
  {
    id: 2,
    name: "Apollo Broccoli",
    image: "/images/musashi.jpeg",
    from: "Portugal",
    nutrients: "Vitamin C, Vitamin K",
    quantity: "3 🥦",
    price: "5.50",
    organic: true,
    description:
      "Broccoli is known to be a hearty and tasty vegetable which is rich in dozens of nutrients. It is said to pack the most nutritional punch of any vegetable. When we think about green vegetables to include in our diet, broccoli is one of the foremost veggies to come to our mind. Broccoli is a cruciferous vegetable and part of the cabbage family, which includes vegetables such as Brussel sprouts and kale. Although the tastes are different, broccoli and these other vegetables are from the same family.",
  },
  {
    id: 3,
    name: "Baby Carrots",
    image: "/images/musashi.jpeg",
    from: "France",
    nutrients: "Vitamin A, Vitamin K",
    quantity: "20 🥕",
    price: "3.00",
    organic: true,
    description:
      "The carrot is a root vegetable that is often claimed to be the perfect health food. It is crunchy, tasty and highly nutritious. Carrots are a particularly good source of beta-carotene, fiber, vitamin K, potassium and antioxidants. Carrots have a number of health benefits. They are a weight loss friendly food and have been linked to lower cholesterol levels and improved eye health.",
  },
];

function Transition() {
  const [searchCharacters, setSearchCharacters] = useState("");
  const [filterCharacters, setFilterCharacters] = useState(charactersJsonData);
  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }) => {
    setSearchCharacters(value);
    startTransition(() => {
      setFilterCharacters(
        charactersJsonData.filter((item) => item.name.includes(value))
      );
    });
  };

  return (
    <>
      <div>
        {charactersJsonData.length !== filterCharacters.length
          ? `${filterCharacters.length} matches`
          : null}
      </div>

      <input
        onChange={handleChange}
        value={searchCharacters}
        type="text"
        placeholder="Type a name"
      />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="cards">
          {filterCharacters.map((user) => (
            <div class="card">
              <div className="profile">
                <img
                  className="image"
                  src={`http://127.0.0.1:3001${user.image}`}
                  alt="avatar"
                />
              </div>
              <div className="body">
                <strong>{user.name}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Transition;
