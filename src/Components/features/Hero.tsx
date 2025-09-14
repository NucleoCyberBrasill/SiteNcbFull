import DecryptedText from "../ui/DecryptedText";
import TextType from "../ui/TextType";
export function Hero() {
  return (
    // hero section
    <section
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
      data-aos="fade-down"
    >
      <DecryptedText
        text="Núcleo Cyber Brasil"
        speed={100}
        maxIterations={20}
  characters="01#@$%&*<>[]{}|/\\?!+-=█▓▒░"
        className="text-5xl font-bold mb-4 text-[var(--color-primary-self)]"
        parentClassName="all-letters"
        encryptedClassName="text-5xl font-bold mb-4 text-green-700"
        animateOn="view"
        sequential
      />
      <TextType
        className="text-xl max-w-2xl text-gray-600"
        typingSpeed={10}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
        loop={true}
        text={[
          "Somos o NCB — Núcleo Cyber Brasil, ficamos muito felizes com o seu interesse =)",
          "Somos um grupo de estudos, exclusivo para alunos da Gran Faculdade, composto por alunos de diversos cursos e com foco na área de Segurança da Informação.",
        ]}
      />
    </section>
  );
}
