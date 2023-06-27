"use client";
import React from "react";
import styles from "./AboutMe.module.css";
import { Container } from "react-bootstrap";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className={styles.mainWrapper}>
      <Container fluid>
        <div className={styles.rowWrapper}>
          <div className={styles.leftColumn}>
            <Image
              className={styles.aboutMeImage}
              src={"/images/abtme.webp"}
              width={325}
              height={340}
            />
            <span className={styles.rotatingLogo}>
              <svg
                fill="none"
                viewBox="0 0 86 86"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.logo}
              >
                <path
                  className={styles.xyz}
                  d="m38.448 80.378-.316 1.488-7.011-1.488.316-1.488 2.613.555 1.496-7.05 1.784.38-1.496 7.048zm-10.629-10.848-5.033 7.13-4.805-3.392.878-1.243 3.296 2.328 1.2-1.7-3.05-2.152.877-1.243 3.05 2.153 1.202-1.703-3.311-2.337.877-1.243zm-18.211-11.769.951 1.606c-.19.153-.34.322-.447.508a1.658 1.658 0 0 0 -.184 1.243c.047.22.135.437.262.652.23.389.527.67.892.844.361.175.772.234 1.233.176.458-.057.948-.24 1.468-.548.535-.318.938-.664 1.208-1.038.269-.377.41-.765.425-1.164a2.102 2.102 0 0 0 -.314-1.166 2.3 2.3 0 0 0 -.434-.54 1.645 1.645 0 0 0 -1.143-.457 1.81 1.81 0 0 0 -.653.12l-.944-1.61a3.482 3.482 0 0 1 2.43-.122 3.63 3.63 0 0 1 1.18.637c.37.296.698.685.983 1.166.397.67.6 1.358.61 2.066.008.705-.184 1.38-.578 2.026-.394.644-1 1.207-1.816 1.69-.819.486-1.607.745-2.363.777-.757.033-1.442-.126-2.056-.476-.616-.348-1.12-.852-1.51-1.512a4.476 4.476 0 0 1 -.534-1.318 3.566 3.566 0 0 1 -.053-1.311 3.2 3.2 0 0 1 .437-1.21c.228-.383.545-.73.95-1.039zm3.142-8.343-8.685.856-.18-1.837 3.583-.353-.368-3.727-3.583.353-.18-1.832 8.685-.856.18 1.832-3.588.353.368 3.728 3.587-.353zm2.84-30.972-1.083 1.52a1.827 1.827 0 0 0 -.646-.204 1.636 1.636 0 0 0 -.63.048 1.783 1.783 0 0 0 -.581.287 2.16 2.16 0 0 0 -.49.504c-.262.368-.4.753-.411 1.156-.014.402.098.802.338 1.2.238.395.603.77 1.095 1.12.507.361.986.59 1.438.685.454.093.866.066 1.236-.082a2.1 2.1 0 0 0 .94-.76 2.3 2.3 0 0 0 .317-.615 1.643 1.643 0 0 0 -.044-1.23 1.81 1.81 0 0 0 -.373-.548l1.09-1.515a3.485 3.485 0 0 1 1.094 2.172c.05.43.015.876-.105 1.338a4.23 4.23 0 0 1 -.668 1.37c-.452.634-1 1.099-1.643 1.394-.64.293-1.336.39-2.086.292-.748-.1-1.509-.427-2.281-.977-.775-.553-1.33-1.168-1.667-1.847-.335-.68-.468-1.37-.396-2.073.07-.704.327-1.368.772-1.993.294-.412.623-.752.99-1.021.368-.272.76-.465 1.177-.58a3.202 3.202 0 0 1 1.283-.09 3.7 3.7 0 0 1 1.334.45zm13.804-8.215c.455.836.684 1.633.687 2.392.006.758-.18 1.44-.554 2.045-.374.602-.9 1.087-1.575 1.456-.681.37-1.377.55-2.087.535-.71-.014-1.381-.229-2.015-.643-.634-.415-1.178-1.04-1.632-1.872-.456-.836-.686-1.632-.692-2.39-.005-.757.18-1.437.553-2.039.373-.604.9-1.092 1.58-1.463.677-.369 1.37-.546 2.08-.532.71.01 1.383.223 2.017.638.636.413 1.182 1.038 1.638 1.873zm-1.643.896c-.295-.541-.625-.954-.99-1.237-.362-.285-.741-.443-1.138-.476a2.075 2.075 0 0 0 -1.182.27c-.392.214-.68.496-.868.848-.187.35-.26.756-.22 1.216.043.459.212.959.507 1.5.295.542.624.955.986 1.24.365.282.746.44 1.142.473.397.033.79-.057 1.182-.27.392-.214.681-.496.868-.847.188-.352.26-.756.217-1.215-.04-.46-.209-.96-.504-1.502zm9.926 1.323-.68-8.7 1.84-.145.561 7.184 3.73-.291.119 1.517zm11.416.225 2.548-8.347 1.765.539-2.105 6.892 3.579 1.092-.444 1.455zm10.553 4.332 5.53-6.75 4.55 3.726-.964 1.177-3.122-2.558-1.318 1.609 2.888 2.366-.964 1.176-2.888-2.365-1.32 1.612 3.134 2.568-.964 1.177zm17.322 13.043-.834-1.67c.2-.139.361-.297.482-.475.123-.179.208-.372.254-.58.045-.206.052-.422.019-.647a2.186 2.186 0 0 0 -.215-.67 2.083 2.083 0 0 0 -.829-.905c-.348-.2-.754-.288-1.218-.263-.46.024-.962.171-1.503.442-.557.278-.983.594-1.28.948-.294.357-.463.734-.507 1.13-.043.397.034.792.23 1.186.11.22.242.41.395.57.153.161.323.288.508.38.188.09.388.142.599.157a1.81 1.81 0 0 0 .66-.072l.826 1.674a3.484 3.484 0 0 1 -2.432-.052 3.63 3.63 0 0 1 -1.132-.721 4.23 4.23 0 0 1 -.897-1.234c-.348-.696-.501-1.397-.46-2.104.042-.703.282-1.363.72-1.98.44-.613 1.085-1.132 1.933-1.556.852-.425 1.656-.627 2.413-.605s1.43.23 2.016.622c.59.391 1.056.93 1.399 1.616.226.453.372.904.438 1.354.067.452.053.889-.04 1.31a3.233 3.233 0 0 1 -.523 1.176 3.7 3.7 0 0 1 -1.022.968zm3.4 7.486 1.52-.064.302 7.16-1.52.065-.113-2.67-7.2.304-.076-1.822 7.2-.304-.113-2.67zm-.24 17.384-8.335-2.587.547-1.762 8.335 2.588-.547 1.762zm-4.972 10.145-6.532-2.398-.05.064 3.944 5.734-1.254 1.617-5.051-7.727 1.457-1.878 8.742 2.968zm-15.128 3.069 4.106 7.701-5.189 2.767-.715-1.342 3.56-1.9-.978-1.834-3.294 1.756-.716-1.342 3.294-1.757-.98-1.838-3.576 1.906-.716-1.342z"
                />
              </svg>
              <span className={styles.workingEmoji}>
                <Image
                  className={styles.workingEmojiImage}
                  src={"/images/working-emoji.png"}
                  width={40}
                  height={40}
                />
              </span>
            </span>
          </div>
          <div className={`${styles.rightColumn} col-7`}>
            <div className={styles.AboutMeTag}>ABOUT ME</div>
            <div className={styles.AboutMeHeading}>
              A complete web designer based in Ahmedabad, India 📍
            </div>
            <div className={styles.description}>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React.JS, Next.JS, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
