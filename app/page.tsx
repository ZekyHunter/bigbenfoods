import Hero from "../components/home/hero";
import FeatureRow from "../components/home/FeatureRow";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <FeatureRow
        image="/img/food.jpg"
        title="Lorem ipsum header"
        textLeft="Lorem ipsum dolor sit amet consectetur. Vestibulum vulputate posuere gravida, sed posuere dui. Phasellus varius eget turpis et pretium."
        textRight="Lorem ipsum dolor sit amet consectetur. Aenean non magna in nibh venenatis porttitor at id. Morbi a nisi neque. Sed posuere dapibus at malesuada. Praesent non sem et ex feugiat vulputate. Aenean hendrerit felis a fringilla lacinia. Nunc id arcu, donec ultrices scelerisque quis nulla massa consequat amet."
      />

      <FeatureRow
        reverse
        image="/img/food.jpg"
        title="Lorem ipsum header"
        textLeft="Lorem ipsum dolor sit amet consectetur. Vestibulum vulputate posuere gravida, sed posuere dui. Phasellus varius eget turpis et pretium."
        textRight="Lorem ipsum dolor sit amet consectetur. Aenean non magna in nibh venenatis porttitor at id. Morbi a nisi neque. Sed posuere dapibus at malesuada. Praesent non sem et ex feugiat vulputate. Aenean hendrerit felis a fringilla lacinia. Nunc id arcu, donec ultrices scelerisque quis nulla massa consequat amet."
      />

      <FeatureRow
        image="/img/food.jpg"
        title="Lorem ipsum header"
        textLeft="Lorem ipsum dolor sit amet consectetur. Vestibulum vulputate posuere gravida, sed posuere dui. Phasellus varius eget turpis et pretium."
        textRight="Lorem ipsum dolor sit amet consectetur. Aenean non magna in nibh venenatis porttitor at id. Morbi a nisi neque. Sed posuere dapibus at malesuada. Praesent non sem et ex feugiat vulputate. Aenean hendrerit felis a fringilla lacinia. Nunc id arcu, donec ultrices scelerisque quis nulla massa consequat amet."
      />
    </main>
  );
}
