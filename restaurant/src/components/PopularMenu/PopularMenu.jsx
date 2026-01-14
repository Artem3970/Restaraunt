import "./PopularMenu.css";
import p1 from "../../assets/images/1.png";
import p2 from "../../assets/images/2.png";
import p3 from "../../assets/images/3.png";

function PopularMenu() {
  return (
    <section class="section2">
      <div class="section2container">
        <h2 class="section2title">POPULAR MENU</h2>

        <p class="section2text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>


      <div class="container2">
          <div class="box1">
            <img src={p1} />
            <div class="box1text">
              <h2 class="box1title">PACKAGE I</h2>
              <p class="box1subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div class="box2">
            <img src={p2} />
            <div class="box2text">
              <h2 class="box2title">PACKAGE I</h2>
              <p class="box2subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div class="box3">
            <img src={p3} />
            <div class="box3text">
              <h2 class="box3title">PACKAGE I</h2>
              <p class="box3subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
export default PopularMenu;
