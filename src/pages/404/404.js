import notFoundPoster from 'assets/notfound.jpg';
import notFoundVideo from 'assets/notfound.mp4';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment } from 'react';
import styles from './404.module.css';

export function Page404() {
  return (
    <section className={styles.page}>
      <Transition in>
        {visible => (
          <Fragment>
            <div className={styles.details}>
              <div className={styles.text}>
                <Heading
                  className={styles.title}
                  data-visible={visible}
                  level={0}
                  weight="bold"
                >
                  404
                </Heading>
                <Heading
                  aria-hidden
                  className={styles.subheading}
                  data-visible={visible}
                  as="h2"
                  level={3}
                >
                  <DecoderText text="Error error error" start={visible} delay={300} />
                </Heading>
                <Text className={styles.description} data-visible={visible} as="p">
                  This page could not be found. It either doesnt exist or was deleted. Or
                  perhaps you dont exist.
                </Text>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.button}
                  data-visible={visible}
                  href="/"
                  icon="chevronRight"
                >
                  Back
                </Button>
              </div>
            </div>

            <div className={styles.videoContainer} data-visible={visible}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
                data-visible={visible}
                poster={notFoundPoster.src}
              >
                <source src={notFoundVideo} type="video/mp4" />
              </video>
              <a
                className={styles.credit}
                data-visible={visible}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mr. Bean waiting with you.
              </a>
            </div>
          </Fragment>
        )}
      </Transition>
    </section>
  );
}
