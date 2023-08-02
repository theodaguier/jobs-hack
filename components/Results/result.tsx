import { useFormContext } from "@/context/formContext";
import styles from "@/sass/styles.module.scss";

import CopyToClipBoard from "@/components/Buttons/copyToClipBoard";
import ModelLetter from "../Models/ModelLetter";

export default function Result() {
  const { data, questions } = useFormContext();

  const name = data[questions[0].name];
  const companyName = data[questions[1].name];
  const jobName = data[questions[2].name];
  const jobDomain = data[questions[3].name];

  const modelLetter = `Objet : Candidature pour le poste de ${jobName}.\n
Madame, Monsieur, Je suis vivement intéressée par le poste de ${jobName} au sein de votre entreprise ${companyName}.\n
Votre vision et vos valeurs m'ont particulièrement séduite, et je suis convaincue que votre société offre un environnement stimulant propice à l'apprentissage et au développement professionnel.\nMa passion se focalise sur la communication et la conception graphique expérimentale, où je développe une compréhension approfondie des récits à travers un processus de recherche et d'expérimentation. Mon approche créative est résolument tournée vers l'innovation, explorant de nouvelles voies telles que le collage, la 3D et la photographie analogique. J'aime également créer des meubles extravagants pour nourrir en permanence mon inspiration et parvenir à des solutions de conception novatrices.\n
Mes quatres précédentes années d'études à l'école BAU College of Arts and Design of Barcelona m'ont permis d'acquérir une solide base de connaissances en design graphique ainsi que la maîtrise des logiciels de la suite Adobe, grâce au soutien d'une équipe pédagogique d'excellence.\n
En 2022, j'ai eu la chance de mettre en pratique ces connaissances en design graphique et communication visuelle lors d'un stage de six mois au sein de l'entreprise de haute couture Teresa Helbig.\n
En tant que personne dynamique et créative, je suis enthousiaste à l'idée de m'investir pleinement dans la culture et les valeurs de votre entreprise pour y apporter une contribution significative. Pour moi, ce poste représente une opportunité exceptionnelle de relever des défis stimulants. Le choix de l'alternance s'avère parfaitement adapté à mes perspectives professionnelles, me permettant ainsi d'appliquer les connaissances acquises à l'école dans un environnement professionnel concret.
Cette approche d'apprentissage en milieu réel est la clé pour approfondir mes compétences et évoluer dans mon parcours.\n
Je vous remercie sincèrement de l'attention que vous porterez à ma candidature. J'espère avoir l'opportunité de vous rencontrer en personne afin de vous exposer de vive voix mes motivations.\n
Respectueusement,\n
  ${name}
`;
  return (
    <div className={styles.result_text_container}>
      <ModelLetter modelLetter={modelLetter} />
      <CopyToClipBoard textToCopy={modelLetter} />
    </div>
  );
}
