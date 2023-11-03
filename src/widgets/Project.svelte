<script lang="ts">
  import ProjectItem from "../components/Project.component.svelte";
  import Contributions from "./Contributions.svelte";
  interface IProject {
    title: string;
    category: string;
    isReversed?: boolean;
  }

  const groupA: IProject[] = [];

  const groupB: IProject[] = [];

  const projects: IProject[] = [
    {
      title: "Money In Minute - Landing Page",
      category: "Web Development/\nWordpress",
    },
    {
      title: "Mualine - Vendor Booking App",
      category: "Web Development/\nLaravel",
    },
    {
      title: "Business Africa Online - News Mag",
      category: "Web Development/\nWordpress",
    },
    {
      title: "OrewaCity - Real Estate Website",
      category: "Web Development/\nWordpress",
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
  {#each groupA as { title, category }, index}
    <ProjectItem
      isReversed={index % 2 == 0}
      {title}
      {category}
      showBottomBorder={index === groupA.length - 1}
    />
  {/each}
  <Contributions />
  {#each groupB as { title, category }, index}
    <ProjectItem
      isReversed={index % 2 == 0}
      {title}
      {category}
      showBottomBorder={index === groupB.length - 1}
    />
  {/each}
</section>
