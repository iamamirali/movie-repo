// import Image from "next/image";
// import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Header } from "./components";

export default async function Home() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex flex-col flex-grow pb-5 pt-16 px-4">
        <h1>hello world</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, nulla
          quod aperiam est quae adipisci quisquam consequuntur nobis placeat
          voluptas accusamus excepturi quibusdam itaque praesentium iusto nihil
          autem non enim error magni voluptate laudantium molestiae? Maxime fuga
          voluptatibus dignissimos vero alias, exercitationem quas tempore
          nesciunt esse rerum qui nisi perferendis provident. Eveniet obcaecati
          fuga temporibus officiis sunt. Dolor animi asperiores iste, non
          praesentium consectetur sequi iusto quod possimus fugit ex nemo! Et
          maxime iusto quidem cumque est consequuntur voluptate quam dolorum
          beatae. Quibusdam consequatur dolorum dolor quod facere itaque nemo,
          nihil quisquam similique necessitatibus commodi ad maiores
          reprehenderit magni eaque ab? Libero natus autem provident enim
          pariatur animi iure cumque ut nobis ipsam sequi facere praesentium
          vel, ipsum ducimus tempore, veniam amet error modi. Iste incidunt
          totam maxime, eaque dolor eligendi perferendis, labore iusto, rem
          exercitationem assumenda porro architecto qui quis nihil distinctio!
          Numquam laudantium inventore ullam et facere itaque eius deleniti?
          Veniam molestiae expedita facilis est saepe vero ea molestias illo
          temporibus, laborum eius, consequatur porro assumenda! Dolorem illum
          hic eum dolorum possimus repellat, error nostrum molestiae sit est.
          Ducimus quasi, quaerat atque sint provident similique explicabo
          ratione enim amet, in, quidem dolorem maiores tenetur unde aliquid
          nesciunt? Tempora reprehenderit, quod eaque explicabo quia illum porro
          numquam! Veniam a vero, blanditiis tempora maxime minus provident
          alias voluptatibus nobis quas odio, explicabo rem quo et delectus
          dignissimos vel sint. Culpa inventore obcaecati quisquam assumenda
          dolore eveniet asperiores officia voluptatibus recusandae accusantium,
          adipisci perspiciatis rem hic quasi odit officiis est cumque
          repellendus eius magnam totam temporibus reiciendis. Facere esse
          expedita impedit ea incidunt similique enim praesentium, dolores
          obcaecati voluptas libero odit dignissimos, distinctio autem. Eum
          aperiam ullam temporibus quisquam! Quibusdam praesentium sequi
          asperiores et, voluptatum quia minima maiores odio unde eaque,
          veritatis quaerat deleniti optio odit expedita. Sint provident
          possimus delectus, eos doloremque rem itaque sit dicta iusto
          perspiciatis consequuntur ipsum voluptates officiis. Sint repellendus
          beatae blanditiis! Sunt eveniet maxime reprehenderit, rem perferendis
          similique! Qui, aperiam voluptates libero id laborum sapiente.
          Cupiditate quas maiores numquam placeat impedit unde, repudiandae
          itaque. Ea repellendus, recusandae ullam rem perspiciatis architecto
          beatae repudiandae nulla nesciunt dolore adipisci accusamus, non
          labore qui autem. Harum, perferendis praesentium adipisci amet eum
          voluptatibus. Officiis temporibus beatae quos et magnam consequuntur
          veniam est voluptatem eos velit, fugiat expedita asperiores adipisci
          consequatur soluta architecto numquam magni, tempore quod voluptatibus
          delectus aspernatur id provident! Sunt laboriosam iure, illum quis ad
          dolorem porro! Ut non commodi consectetur delectus incidunt
          voluptatibus inventore sed porro? Eligendi consequatur minima ipsam
          nam porro dolorum fugit harum doloribus provident, placeat vero, odio
          consectetur molestias possimus accusamus aut maiores facilis numquam
          earum delectus, voluptatibus deleniti impedit blanditiis dolores!
          Excepturi incidunt totam itaque dolor, architecto nemo magni quisquam
          rerum pariatur eum, cupiditate voluptate molestias quaerat esse omnis
          quos dolores, voluptatem dolore. Exercitationem minima eveniet eos
          suscipit ex, molestiae saepe alias minus hic. Laudantium sint ex, nemo
          doloribus tempora ratione quo, voluptate recusandae, dolorum suscipit
          eligendi iure molestiae enim nihil voluptates. Ex corrupti odio
          impedit obcaecati quidem voluptatem, minima consequuntur laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto
          quae dolores similique, illum et sit! Perspiciatis autem neque
          deserunt voluptatibus qui? Dolorem eum optio autem nihil. Quis
          recusandae dolor unde veniam quam, id, ab cum est aliquam, fuga
          assumenda repudiandae consectetur cumque doloribus obcaecati tenetur
          odit molestiae nobis perspiciatis minima temporibus expedita
          praesentium modi sint? Perspiciatis delectus eligendi odit numquam
          adipisci incidunt natus voluptates. Cumque esse nobis earum est
          aspernatur, nam iure. Culpa minus excepturi nobis repudiandae odit
          fugiat sed iure saepe quod ullam esse recusandae dicta doloribus amet,
          veritatis nam harum distinctio sit atque dolorum voluptatibus?
          Incidunt facere commodi aspernatur! Quam in delectus iusto facere illo
          alias sequi recusandae ducimus fugiat magni? Accusantium autem, atque
          ipsam soluta consequatur, ducimus expedita quos repudiandae neque quis
          illum maxime. Rerum hic illo necessitatibus molestias asperiores,
          veritatis repellendus, corrupti exercitationem quidem tempora
          provident quibusdam corporis optio eligendi tempore et est! Expedita
          porro rerum dicta eius sit necessitatibus voluptate dolorem similique,
          sapiente neque error adipisci ducimus animi tenetur illo a quisquam
          asperiores autem harum repudiandae dolores rem. Magni, molestiae
          inventore sunt sit eligendi qui! Fugiat eaque dolores deserunt
          similique sed veniam necessitatibus saepe, aspernatur repellat, dicta
          modi, aliquid doloremque omnis? Tenetur quod quam delectus autem atque
          quis ab iste repellat, aut fuga sequi aliquam cupiditate quia hic.
          Sapiente beatae esse pariatur atque at error illo natus est! Enim ea
          quibusdam delectus nobis dignissimos, repudiandae molestias ut, earum
          non aut nesciunt reiciendis aspernatur, magni exercitationem magnam
          totam dicta quos porro vitae doloremque veritatis autem sed in!
          Similique est aut, facere hic nisi reiciendis quasi suscipit quae
          eaque dicta adipisci. Libero cupiditate delectus provident laudantium
          harum expedita pariatur? Nemo harum delectus repellendus
          necessitatibus, cupiditate maiores, sit incidunt nisi ipsam laborum
          praesentium reprehenderit ullam enim quasi autem aut perspiciatis
          error voluptates quam? Porro dolore dolor id assumenda iste unde esse
          blanditiis vitae itaque repellendus animi optio sed eligendi aut
          voluptas, quibusdam dicta dolores ratione maiores accusamus incidunt
          voluptatibus labore enim? Commodi laboriosam dolorem, aspernatur neque
          culpa ut facere adipisci harum alias consequatur, provident impedit
          voluptas illum cum soluta quis, minima itaque quidem tempora? Error
          ipsam voluptates maxime exercitationem totam ipsa eligendi eius
          corporis voluptatibus veritatis eveniet nulla rem, odit harum ducimus
          iste obcaecati cum suscipit aliquam. Ratione possimus quis tempora
          eaque commodi nesciunt, dicta, fugiat tempore porro vitae iure! Quis
          repellendus et delectus nam incidunt deleniti modi eaque optio
          exercitationem autem soluta ea magnam, fugit voluptas nobis
          voluptatem, libero similique unde harum ad tempora minima. Similique
          dolore impedit voluptate cumque quos? Minus cupiditate repellendus
          repudiandae repellat esse culpa quo libero, non asperiores, nostrum
          sunt reprehenderit sint dolorum adipisci vel accusamus? Animi at
          voluptatum dolore exercitationem quis aperiam numquam nulla a quam?
          Enim, architecto neque iure ex porro error provident esse perferendis!
          Velit minus voluptate praesentium consequatur quod magnam et
          aspernatur nobis quisquam ullam aperiam dolore exercitationem aut,
          nostrum rem quae atque iure blanditiis cum. A deleniti magni quis qui
          veritatis amet ea asperiores? Eaque tempora ipsam, voluptatem eligendi
          accusamus amet ad quasi dolore sunt esse nisi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas,
          labore doloribus voluptates unde officia cupiditate eaque sunt
          voluptas delectus perspiciatis reiciendis deserunt, nemo
          necessitatibus ut non nesciunt nobis pariatur? Modi possimus, nihil
          odio iste atque porro, voluptatibus error eligendi, aspernatur cum
          fuga quis? Corrupti aperiam consequatur eaque minima voluptas
          explicabo quam eos autem porro! Eum deleniti, repellat accusantium
          molestias voluptatem quod illo voluptatum. Rerum perferendis, sed quia
          laudantium sit voluptate, pariatur provident, enim eos maxime fuga
          molestiae nulla hic adipisci iste aliquid unde cum beatae fugit
          tenetur distinctio. Debitis aliquam distinctio natus, amet maxime
          similique saepe officiis porro at ea ipsum consectetur? Corporis
          consequatur nobis incidunt enim? Blanditiis obcaecati modi dolorum ab
          distinctio necessitatibus nulla eius a nobis laudantium minima fugit
          quidem non quos quaerat ipsam perferendis omnis, et libero temporibus
          provident ipsa velit error quo! A odit cupiditate, doloremque
          voluptatibus quo adipisci accusamus aliquid quasi beatae, quas
          blanditiis ut velit fugit nulla incidunt sit officiis consequatur
          libero minus numquam exercitationem! Placeat quibusdam, veritatis
          aliquid ea fuga accusantium dolorum? Atque labore libero architecto
          maxime ipsa quae minima doloribus aspernatur fugiat repellat. Veniam
          error maxime debitis saepe voluptatibus voluptate enim recusandae
          ipsam. Dicta minima corporis architecto, voluptate commodi aspernatur
          aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas,
          labore doloribus voluptates unde officia cupiditate eaque sunt
          voluptas delectus perspiciatis reiciendis deserunt, nemo
          necessitatibus ut non nesciunt nobis pariatur? Modi possimus, nihil
          odio iste atque porro, voluptatibus error eligendi, aspernatur cum
          fuga quis? Corrupti aperiam consequatur eaque minima voluptas
          explicabo quam eos autem porro! Eum deleniti, repellat accusantium
          molestias voluptatem quod illo voluptatum. Rerum perferendis, sed quia
          laudantium sit voluptate, pariatur provident, enim eos maxime fuga
          molestiae nulla hic adipisci iste aliquid unde cum beatae fugit
          tenetur distinctio. Debitis aliquam distinctio natus, amet maxime
          similique saepe officiis porro at ea ipsum consectetur? Corporis
          consequatur nobis incidunt enim? Blanditiis obcaecati modi dolorum ab
          distinctio necessitatibus nulla eius a nobis laudantium minima fugit
          quidem non quos quaerat ipsam perferendis omnis, et libero temporibus
          provident ipsa velit error quo! A odit cupiditate, doloremque
          voluptatibus quo adipisci accusamus aliquid quasi beatae, quas
          blanditiis ut velit fugit nulla incidunt sit officiis consequatur
          libero minus numquam exercitationem! Placeat quibusdam, veritatis
          aliquid ea fuga accusantium dolorum? Atque labore libero architecto
          maxime ipsa quae minima doloribus aspernatur fugiat repellat. Veniam
          error maxime debitis saepe voluptatibus voluptate enim recusandae
          ipsam. Dicta minima corporis architecto, voluptate commodi aspernatur
          aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas,
          labore doloribus voluptates unde officia cupiditate eaque sunt
          voluptas delectus perspiciatis reiciendis deserunt, nemo
          necessitatibus ut non nesciunt nobis pariatur? Modi possimus, nihil
          odio iste atque porro, voluptatibus error eligendi, aspernatur cum
          fuga quis? Corrupti aperiam consequatur eaque minima voluptas
          explicabo quam eos autem porro! Eum deleniti, repellat accusantium
          molestias voluptatem quod illo voluptatum. Rerum perferendis, sed quia
          laudantium sit voluptate, pariatur provident, enim eos maxime fuga
          molestiae nulla hic adipisci iste aliquid unde cum beatae fugit
          tenetur distinctio. Debitis aliquam distinctio natus, amet maxime
          similique saepe officiis porro at ea ipsum consectetur? Corporis
          consequatur nobis incidunt enim? Blanditiis obcaecati modi dolorum ab
          distinctio necessitatibus nulla eius a nobis laudantium minima fugit
          quidem non quos quaerat ipsam perferendis omnis, et libero temporibus
          provident ipsa velit error quo! A odit cupiditate, doloremque
          voluptatibus quo adipisci accusamus aliquid quasi beatae, quas
          blanditiis ut velit fugit nulla incidunt sit officiis consequatur
          libero minus numquam exercitationem! Placeat quibusdam, veritatis
          aliquid ea fuga accusantium dolorum? Atque labore libero architecto
          maxime ipsa quae minima doloribus aspernatur fugiat repellat. Veniam
          error maxime debitis saepe voluptatibus voluptate enim recusandae
          ipsam. Dicta minima corporis architecto, voluptate commodi aspernatur
          aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas,
          labore doloribus voluptates unde officia cupiditate eaque sunt
          voluptas delectus perspiciatis reiciendis deserunt, nemo
          necessitatibus ut non nesciunt nobis pariatur? Modi possimus, nihil
          odio iste atque porro, voluptatibus error eligendi, aspernatur cum
          fuga quis? Corrupti aperiam consequatur eaque minima voluptas
          explicabo quam eos autem porro! Eum deleniti, repellat accusantium
          molestias voluptatem quod illo voluptatum. Rerum perferendis, sed quia
          laudantium sit voluptate, pariatur provident, enim eos maxime fuga
          molestiae nulla hic adipisci iste aliquid unde cum beatae fugit
          tenetur distinctio. Debitis aliquam distinctio natus, amet maxime
          similique saepe officiis porro at ea ipsum consectetur? Corporis
          consequatur nobis incidunt enim? Blanditiis obcaecati modi dolorum ab
          distinctio necessitatibus nulla eius a nobis laudantium minima fugit
          quidem non quos quaerat ipsam perferendis omnis, et libero temporibus
          provident ipsa velit error quo! A odit cupiditate, doloremque
          voluptatibus quo adipisci accusamus aliquid quasi beatae, quas
          blanditiis ut velit fugit nulla incidunt sit officiis consequatur
          libero minus numquam exercitationem! Placeat quibusdam, veritatis
          aliquid ea fuga accusantium dolorum? Atque labore libero architecto
          maxime ipsa quae minima doloribus aspernatur fugiat repellat. Veniam
          error maxime debitis saepe voluptatibus voluptate enim recusandae
          ipsam. Dicta minima corporis architecto, voluptate commodi aspernatur
          aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas,
          labore doloribus voluptates unde officia cupiditate eaque sunt
          voluptas delectus perspiciatis reiciendis deserunt, nemo
          necessitatibus ut non nesciunt nobis pariatur? Modi possimus, nihil
          odio iste atque porro, voluptatibus error eligendi, aspernatur cum
          fuga quis? Corrupti aperiam consequatur eaque minima voluptas
          explicabo quam eos autem porro! Eum deleniti, repellat accusantium
          molestias voluptatem quod illo voluptatum. Rerum perferendis, sed quia
          laudantium sit voluptate, pariatur provident, enim eos maxime fuga
          molestiae nulla hic adipisci iste aliquid unde cum beatae fugit
          tenetur distinctio. Debitis aliquam distinctio natus, amet maxime
          similique saepe officiis porro at ea ipsum consectetur? Corporis
          consequatur nobis incidunt enim? Blanditiis obcaecati modi dolorum ab
          distinctio necessitatibus nulla eius a nobis laudantium minima fugit
          quidem non quos quaerat ipsam perferendis omnis, et libero temporibus
          provident ipsa velit error quo! A odit cupiditate, doloremque
          voluptatibus quo adipisci accusamus aliquid quasi beatae, quas
          blanditiis ut velit fugit nulla incidunt sit officiis consequatur
          libero minus numquam exercitationem! Placeat quibusdam, veritatis
          aliquid ea fuga accusantium dolorum? Atque labore libero architecto
          maxime ipsa quae minima doloribus aspernatur fugiat repellat. Veniam
          error maxime debitis saepe voluptatibus voluptate enim recusandae
          ipsam. Dicta minima corporis architecto, voluptate commodi aspernatur
          aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas,
          labore doloribus voluptates unde officia cupiditate eaque sunt
          voluptas delectus perspiciatis reiciendis deserunt, nemo
          necessitatibus ut non nesciunt nobis pariatur? Modi possimus, nihil
          odio iste atque porro, voluptatibus error eligendi, aspernatur cum
          fuga quis? Corrupti aperiam consequatur eaque minima voluptas
          explicabo quam eos autem porro! Eum deleniti, repellat accusantium
          molestias voluptatem quod illo voluptatum. Rerum perferendis, sed quia
          laudantium sit voluptate, pariatur provident, enim eos maxime fuga
          molestiae nulla hic adipisci iste aliquid unde cum beatae fugit
          tenetur distinctio. Debitis aliquam distinctio natus, amet maxime
          similique saepe officiis porro at ea ipsum consectetur? Corporis
          consequatur nobis incidunt enim? Blanditiis obcaecati modi dolorum ab
          distinctio necessitatibus nulla eius a nobis laudantium minima fugit
          quidem non quos quaerat ipsam perferendis omnis, et libero temporibus
          provident ipsa velit error quo! A odit cupiditate, doloremque
          voluptatibus quo adipisci accusamus aliquid quasi beatae, quas
          blanditiis ut velit fugit nulla incidunt sit officiis consequatur
          libero minus numquam exercitationem! Placeat quibusdam, veritatis
          aliquid ea fuga accusantium dolorum? Atque labore libero architecto
          maxime ipsa quae minima doloribus aspernatur fugiat repellat. Veniam
          error maxime debitis saepe voluptatibus voluptate enim recusandae
          ipsam. Dicta minima corporis architecto, voluptate commodi aspernatur
          aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas,
          labore doloribus voluptates unde officia cupiditate eaque sunt
          voluptas delectus perspiciatis reiciendis deserunt, nemo
          necessitatibus ut non nesciunt nobis pariatur? Modi possimus, nihil
          odio iste atque porro, voluptatibus error eligendi, aspernatur cum
          fuga quis? Corrupti aperiam consequatur eaque minima voluptas
          explicabo quam eos autem porro! Eum deleniti, repellat accusantium
          molestias voluptatem quod illo voluptatum. Rerum perferendis, sed quia
          laudantium sit voluptate, pariatur provident, enim eos maxime fuga
          molestiae nulla hic adipisci iste aliquid unde cum beatae fugit
          tenetur distinctio. Debitis aliquam distinctio natus, amet maxime
          similique saepe officiis porro at ea ipsum consectetur? Corporis
          consequatur nobis incidunt enim? Blanditiis obcaecati modi dolorum ab
          distinctio necessitatibus nulla eius a nobis laudantium minima fugit
          quidem non quos quaerat ipsam perferendis omnis, et libero temporibus
          provident ipsa velit error quo! A odit cupiditate, doloremque
          voluptatibus quo adipisci accusamus aliquid quasi beatae, quas
          blanditiis ut velit fugit nulla incidunt sit officiis consequatur
          libero minus numquam exercitationem! Placeat quibusdam, veritatis
          aliquid ea fuga accusantium dolorum? Atque labore libero architecto
          maxime ipsa quae minima doloribus aspernatur fugiat repellat. Veniam
          error maxime debitis saepe voluptatibus voluptate enim recusandae
          ipsam. Dicta minima corporis architecto, voluptate commodi aspernatur
          aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas,
          labore doloribus voluptates unde officia cupiditate eaque sunt
          voluptas delectus perspiciatis reiciendis deserunt, nemo
          necessitatibus ut non nesciunt nobis pariatur? Modi possimus, nihil
          odio iste atque porro, voluptatibus error eligendi, aspernatur cum
          fuga quis? Corrupti aperiam consequatur eaque minima voluptas
          explicabo quam eos autem porro! Eum deleniti, repellat accusantium
          molestias voluptatem quod illo voluptatum. Rerum perferendis, sed quia
          laudantium sit voluptate, pariatur provident, enim eos maxime fuga
          molestiae nulla hic adipisci iste aliquid unde cum beatae fugit
          tenetur distinctio. Debitis aliquam distinctio natus, amet maxime
          similique saepe officiis porro at ea ipsum consectetur? Corporis
          consequatur nobis incidunt enim? Blanditiis obcaecati modi dolorum ab
          distinctio necessitatibus nulla eius a nobis laudantium minima fugit
          quidem non quos quaerat ipsam perferendis omnis, et libero temporibus
          provident ipsa velit error quo! A odit cupiditate, doloremque
          voluptatibus quo adipisci accusamus aliquid quasi beatae, quas
          blanditiis ut velit fugit nulla incidunt sit officiis consequatur
          libero minus numquam exercitationem! Placeat quibusdam, veritatis
          aliquid ea fuga accusantium dolorum? Atque labore libero architecto
          maxime ipsa quae minima doloribus aspernatur fugiat repellat. Veniam
          error maxime debitis saepe voluptatibus voluptate enim recusandae
          ipsam. Dicta minima corporis architecto, voluptate commodi aspernatur
          aliquam.
        </p>
      </main>
    </div>
  );
  // redirect("/login");
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //     <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
  //       <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  //         Get started by editing&nbsp;
  //         <code className="font-mono font-bold">app/page.tsx</code>
  //       </p>
  //       <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
  //         <a
  //           className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{" "}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className="dark:invert"
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>
  //     <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
  //       <Image
  //         className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //     </div>
  //     <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Docs{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Find in-depth information about Next.js features and API.
  //         </p>
  //       </a>
  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Learn{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Learn about Next.js in an interactive course with&nbsp;quizzes!
  //         </p>
  //       </a>
  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Templates{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Explore starter templates for Next.js.
  //         </p>
  //       </a>
  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Deploy{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //     <div>
  //       <Link href="test" className="uppercase">
  //         to test
  //       </Link>
  //     </div>
  //   </main>
  // );
}
