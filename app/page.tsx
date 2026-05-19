"use client";

import { useState } from "react";
import {Image} from "@heroui/image";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //   <div className="inline-block max-w-xl text-center justify-center">
    //     <span className={title()}>Discount&nbsp;</span>
    //     <span className={title({ color: "violet" })}>Time Machine&nbsp;</span>
    //     <br />
    //     <span className={title()}>Wholesale</span>
    //     <div className={subtitle({ class: "mt-4" })}>
    //       A project template for YOU to make your own!
    //     </div>
    //   </div>

    //   <div className="flex gap-3">
    //     <ConfettiButton />

    //     <div className={spinning ? "animate-spin" : ""}>
    //       <Button radius="full" variant="ghost" onPress={spinButton}>
    //         Spin
    //       </Button>
    //     </div>
    //   </div>

    //   <div className="mt-8">
    //     <Snippet hideCopyButton hideSymbol variant="bordered">
    //       <span>
    //         Get started by editing <Code color="primary">app/page.tsx</Code>
    //       </span>
    //     </Snippet>
    //   </div>
    // </section>

    <div>
        {/* &#10084;&#10032;&#128522;
        <a href="https://HTMLforBabies.com/" 
        target="_blank" rel="external nofollow">
        <img src="/demo.jpg" alt="baby" width="100" height="48" /><br /> HTML For Babies
        </a>
        
        <p>Cupcake ipsum dolor sit amet cake croissant fruitcake muffin. Sweet bonbon candy powder cheesecake muffin sesame snaps jujubes. Muffin macaroon cheesecake cookie souffl&eacute; cookie cheesecake lollipop candy canes. Halvah cotton candy sesame snaps chocolate bar. Sugar plum dessert drag&eacute;e macaroon chupa chups. Cake cheesecake wafer cotton candy. Danish jelly halvah jelly beans tootsie roll donut. Halvah cheesecake halvah jujubes sweet roll biscuit croissant wafer. Cake halvah chocolate bar sugar plum apple pie.</p>
        <p>Tootsie roll pie topping powder sugar plum souffl&eacute;. Gingerbread sugar plum tiramisu powder macaroon candy canes drag&eacute;e icing. Sweet macaroon tootsie roll chocolate chocolate cake. Tootsie roll muffin donut apple pie gummies powder. Lollipop candy canes bonbon sesame snaps danish brownie croissant tiramisu. Oat cake pastry pudding ice cream fruitcake. Muffin pudding croissant pudding tart oat cake caramels sugar plum icing.</p>
        <p>Cheesecake danish biscuit jelly beans croissant souffl&eacute; sweet candy jelly beans. Fruitcake topping jelly-o bonbon. Topping gummi bears brownie cake bear claw chupa chups brownie carrot cake gummi bears. Cupcake sweet brownie sugar plum. Tiramisu jujubes carrot cake ice cream drag&eacute;e bear claw. Chocolate gingerbread drag&eacute;e souffl&eacute; tiramisu. Pudding gingerbread danish icing oat cake marshmallow chocolate. Topping bonbon oat cake caramels.</p>
        <p>Drag&eacute;e chupa chups lemon drops lemon drops fruitcake. Muffin wafer pudding marshmallow drag&eacute;e chocolate souffl&eacute; muffin sweet roll. Sweet roll drag&eacute;e pudding jelly. Chupa chups jelly beans cake. Apple pie tiramisu caramels. Bonbon chocolate bar pudding chupa chups oat cake tootsie roll. Fruitcake cake danish sugar plum chupa chups tart. Topping liquorice drag&eacute;e marshmallow cake candy fruitcake chocolate bar bonbon. Sweet roll oat cake croissant tiramisu wafer cotton candy liquorice bear claw souffl&eacute;. Tart jelly-o marshmallow chocolate bar liquorice cotton candy.</p>
        <p>Lemon drops fruitcake halvah lollipop. Jujubes croissant bonbon marzipan macaroon sweet roll. Tart jelly-o apple pie. Jelly-o sweet roll tart dessert sweet jelly beans chocolate cake gummies cake. Sesame snaps jelly macaroon lemon drops muffin chocolate bear claw jujubes wafer. Jujubes icing oat cake cake jelly marshmallow biscuit lollipop toffee. Lemon drops brownie marshmallow.</p>
        <p>Tiramisu pastry fruitcake tiramisu. Lemon drops sweet lemon drops cotton candy sesame snaps ice cream caramels sweet liquorice. Candy lollipop wafer. Oat cake jelly-o toffee. Jelly biscuit souffl&eacute; gummi bears jelly tart topping. Sesame snaps pudding cookie muffin muffin apple pie cookie jujubes. Croissant cotton candy sweet roll chocolate cake apple pie candy canes sesame snaps danish. Bear claw jujubes dessert jelly beans chocolate cupcake chocolate cake. Oat cake jelly beans cupcake bonbon marzipan jujubes bonbon. Bonbon tart ice cream icing souffl&eacute; bonbon oat cake sesame snaps dessert.</p>
        <p>Sesame snaps lollipop candy topping jelly cookie. Carrot cake danish candy chocolate cake muffin fruitcake jelly beans tart. Chocolate bar pastry dessert pastry. Fruitcake wafer chupa chups marzipan wafer tart jelly beans. Jelly sweet fruitcake cake tootsie roll danish. Pie toffee candy canes. Marzipan muffin jujubes gingerbread lollipop halvah gummies liquorice.</p>
        <p>Dessert cupcake donut. Chocolate cake marshmallow sweet bonbon. Marzipan dessert candy canes sweet roll brownie pudding. Marshmallow biscuit lollipop biscuit croissant. Marzipan liquorice lollipop muffin toffee souffl&eacute; caramels. Tart pudding drag&eacute;e cheesecake icing. Gummi bears wafer apple pie fruitcake.</p>
        <p>Fruitcake cookie powder candy canes. Croissant caramels jelly beans. Gingerbread cookie marshmallow cheesecake carrot cake gummies cake. Chupa chups chocolate cake chocolate cake toffee chupa chups donut bonbon jujubes. Gingerbread drag&eacute;e marzipan wafer. Chupa chups lollipop danish chocolate donut. Sesame snaps gingerbread muffin powder. Cookie candy danish macaroon cake ice cream chocolate bar pastry gummies. Candy marshmallow candy powder jelly beans chupa chups gummies. Cake souffl&eacute; donut liquorice.</p>
        <p>Tootsie roll cheesecake halvah croissant marzipan liquorice cake. Chocolate cake jujubes muffin pudding danish jelly cupcake. Brownie chocolate powder topping jelly beans sesame snaps liquorice cake tiramisu. Gummies bonbon lemon drops croissant dessert chocolate jujubes caramels jujubes. Souffl&eacute; icing macaroon sweet roll fruitcake bear claw cheesecake. Tart sesame snaps toffee oat cake ice cream cookie sugar plum tart. Chocolate cake jelly caramels lollipop cupcake tootsie roll.</p> */}
        
        
    </div>
  );
}
