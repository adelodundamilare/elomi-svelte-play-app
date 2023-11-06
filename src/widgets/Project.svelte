<script lang="ts">
  import ProjectItem from "../components/Project.component.svelte";
  import Contributions from "./Contributions.svelte";
  interface IProject {
    title: string;
    category: string;
    link: string;
    isReversed?: boolean;
  }

  const groupA: IProject[] = [];

  const groupB: IProject[] = [];

  const projects: IProject[] = [
    {
      title: "Money In Minute - Landing Page",
      category: "Web Development/\nWordpress",
      link: "https://moneyinminutes.ng/",
    },
    {
      title: "Mualine - Vendor Booking App",
      category: "Web Development/\nLaravel",
      link: "https://mualine.ng/",
    },
    {
      title: "Arnergy Bluebox - 3D Model",
      category: "3D Exploration/\nCreative Development",
      link: "https://arnergy-3d-bluebox.netlify.app/",
    },
    {
      title: "Business Africa Online - News Mag",
      category: "Web Development/\nWordpress",
      link: "http://businessafricaonline.com/",
    },
    {
      title: "OrewaCity - Real Estate Website",
      category: "Web Development/\nWordpress",
      link: "https://app.orewacity.com/",
    },
  ];

  projects.forEach((item, index) => {
    if (index % 2 === 0) {
      groupA.push(item);
    } else {
      groupB.push(item);
    }
  });
</script>

<section data-scroll-section>
  {#each groupA as { title, link, category }, index}
    <ProjectItem
      isReversed={index % 2 == 0}
      {link}
      {title}
      {category}
      showBottomBorder={index === groupA.length - 1}
    />
  {/each}
  <Contributions />
  {#each groupB as { title, link, category }, index}
    <ProjectItem
      isReversed={index % 2 == 0}
      {link}
      {title}
      {category}
      showBottomBorder={index === groupB.length - 1}
    />
  {/each}
</section>
