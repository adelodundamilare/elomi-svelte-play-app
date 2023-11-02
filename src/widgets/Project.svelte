<script lang="ts">
  import ProjectItem from "../components/Project.component.svelte";
  interface IProject {
    title: string;
    category: string;
    isReversed?: boolean;
  }
  const projects: IProject[] = [
    {
      title: "Toe Arts - Portfolio For S.Owonti",
      category: "UI Development/\nProduct Engineering",
    },
    {
      title: "ColorNG - Cool Color Palette",
      category: "UI Development/\nFirebase",
    },
    {
      title: "Toe Arts - Portfolio For S.Owonti",
      category: "UI Development/\nProduct Engineering",
    },
    {
      title: "ColorNG - Cool Color Palette",
      category: "UI Development/\nFirebase",
    },
    {
      title: "Toe Arts - Portfolio For S.Owonti",
      category: "UI Development/\nProduct Engineering",
    },
    {
      title: "ColorNG - Cool Color Palette",
      category: "UI Development/\nFirebase",
    },
  ];
</script>

<section data-scroll-section>
  {#each projects as { title, category }, index}
    <!-- {#if projects.length / 2 == index}
      <Recognition />
    {/if} -->
    <ProjectItem isReversed={index % 2 == 0} {title} {category} />
  {/each}
</section>
