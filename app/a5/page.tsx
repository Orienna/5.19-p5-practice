"use client"

import { title } from "@/components/primitives";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
export default function A5Page() {
  const reason1Toast = () => {
      addToast({
        title: "Hey!",
        description:
          "This button does nothing. But you can make it do something!",
        color: "danger",
      });
    };
  return (
    <div>
      <h1 className={title()}>A5: Defend the Fictional Villain</h1>
      <Image
          alt="evil ursula"
          src="https://static.wikia.nocookie.net/disneyprincess/images/1/12/Ursula.jpg"
          width={100}
        ></Image>

        <Image
          alt="ursula smiling"
          src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/ursula_4.jpg"
          width={100}
        ></Image>
        
        <div className="flex flex-wrap gap-3">
        <Button>Reason #1</Button>
        <Button onPress={() => {reason1Toast()}} color="secondary">Reason #2</Button>
        
      </div>
        <Image
          alt="ursula posing"
          src="https://www.themarysue.com/wp-content/uploads/2023/05/Ursula-The-Little-Mermaid-1989.jpg?fit=1200%2C780"
          width={100}
        ></Image>
      <p>
        <b><i>Introducing Ursula: </i></b>She is a octopus-human hybrid, also known as an iconic sea witch from Disney's The Little Mermaid. People view her as a villain because she preys on vulnerable merfolk, intentionally sabotages deals to claim her victims' souls, and seeks to overthrow King Triton to rule the oceans.
      </p>
    </div>
  );
}
