import React from "react";
import scss from "./AboutUs.module.scss";

const AboutUs: React.FC = () => {
  return (
    <section className={scss.about}>
      <div className="container">
        <p className={scss.about__title}>About us</p>
        <span className={scss.about__desc}>
          Arctic Wild is a family owned and operated, wilderness guiding company
          based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided
          and outfitted adventures across Alaska. Our professional guides can
          take you to the most remote, beautiful and wildlife rich areas in
          Alaska. Our dedication to your enjoyment and learning is why people
          return year after year to enjoy the wilds of Alaska with us. Read
          their testimonials to learn more about why we are considered the best
          guide service in northern Alaska. <br/> <br/> Groups are small (1 to 8 people), we
          travel quietly, and the focus is on the land and its inhabitants.
          Whether you join us for a base camp trip, river rafting, canoeing or
          backpacking adventure there is plenty of free time for you to explore,
          bird watch, photograph, fish or do whatever pleases you most. <br/> <br/> Our
          simple and efficient camps are comfortable, and wholesome camp meals
          are as filling as delicious. Our itineraries are as varied as our
          clients. Rigorous mountain expeditions, serene lake paddling, wildlife
          photography, whitewater rafting… We are always thinking of fun new
          trips and new ways to experience one of the largest wilderness areas
          on earth. <br/> <br/>In addition to our regular schedule of trips. We also take
          families, clubs and groups of friends on custom trips each summer.
          Whatever your dream trip is, and no matter what size group you have in
          mind we are happy to work with you to help you plan and enjoy a
          memorable and safe guided adventure. <br/> <br/>In response to a growing demand
          for logistical support and project planning services we also assist
          scientific and photographic expeditions throughout the state. We have
          worked with state and federal agencies on Natural Resource research
          projects. And have guided photographers and filmmakers for projects
          big and small. No matter what type of trip you join our years of local
          experience and dedication to your goals make for a fun, safe and
          successful wilderness adventures.<br/> <br/> All Arctic Wild guides have
          extensive personal and professional wilderness travel experience. They
          are trained in the skills of Leave No Trace and First Aid/CPR, and
          many are certified Swiftwater Rescue Technicians and Wilderness First
          Responders. We annually conduct an in-house training trip each spring.
          While our guides have diverse backgrounds and skills, all of our
          guides have exceptional knowledge of and passion for Alaska’s
          wilderness.<br/> <br/> Constant pressure to develop places like the Arctic
          National Wildlife Refuge means that, for those who care about
          conservation, there is always work to be done. In the off-season, many
          Arctic Wild guides donate time and energy to protecting wilderness.
          And as a business, Arctic Wild donates a portion of its profits to
          support conservation organizations. We also regularly arrange
          educational expeditions for organizations like The Wilderness Society,
          Sierra Club, Earth Justice, Natural Resources Defense Council, and the
          Alaska Wilderness League.<br/> <br/> References are available upon request.
        </span>
      </div>
    </section>
  );
};

export default AboutUs;
