<template>
  <div id="app">

    <header class="page-header">
      <Navigation />
      <HeaderContent />
    </header>

    <PageSection
      title="Services we provide"
      description="We are working with both individuals and businesses from all over the globe to create awesome websites and applications."
      color="#17c2a4"
    >
      <template slot="content">
        <ServicesSection
          :services="services"
        />
      </template>
    </PageSection>

    <PageSection
      title="Meet our beautiful team"
      description="We are a small team of designers and developers, who help brands with big ideas."
      color="#e7f1f8"
    >
      <template slot="content">
        <TeamSection
          :people="team_people"
        />
      </template>
    </PageSection>

    <PageSection
      title="We got skills!"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      color="#ffffff"
    >
      <template slot="content">
        <SkillsSection
          :skills="skills"
        />
      </template>
    </PageSection>

    <PageSection
      title="Our portfolio"
      description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam"
      color="#ffdd99"
    >
      <template slot="content">
        <PortfolioSection
          :works="portfolio_works"
        />
      </template>
    </PageSection>

  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import HeaderContent from "@/components/HeaderContent";
import PageSection from "@/components/PageSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TeamSection from "@/components/sections/TeamSection";
import PortfolioSection from "@/components/sections/PortfolioSection";

export default {
  name: 'App',
  components: {
    PortfolioSection,
    TeamSection,
    SkillsSection,
    ServicesSection,
    PageSection,
    HeaderContent,
    Navigation
  },
  data() {
    return {
      services: [
        {
          image: require('./assets/flag.svg'),
          name: 'Branding',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptas, doloremque illo.'
        },
        {
          image: require('./assets/design.svg'),
          name: 'Design',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sed dolor modi!'
        },
        {
          image: require('./assets/development.svg'),
          name: 'Development',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, modi doloribus.'
        },
        {
          image: require('./assets/rs.svg'),
          name: 'Rocket science',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fuga dolore dicta.'
        }
      ],
      skills: [
        {
          name: 'Web Design',
          percent: 90,
          color: '#30bae7'
        },
        {
          name: 'HTML / CSS',
          percent: 75,
          color: '#d74680'
        },
        {
          name: 'Graphic Design',
          percent: 70,
          color: '#15c7a8'
        },
        {
          name: 'UI / UX',
          percent: 85,
          color: '#eb7d4b'
        }
      ],
      team_people: [
        {
          full_name: 'Anne Hathaway',
          avatar: require('./assets/team-1.jpg'),
          position: 'CEO / Marketing Guru',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi earum molestiae similique? Consectetur, dolorem, officia. Repudiandae, labore, quidem.',
          social: {
            facebook: '#',
            twitter: '#',
            linkedIn: '#',
            mail: '#'
          }
        },
        {
          full_name: 'Kate Upton',
          avatar: require('./assets/team-2.jpg'),
          position: 'Creative Director',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur accusantium totam quod dolorem eligendi deserunt reiciendis neque!',
          social: {
            twitter: '#',
            linkedIn: '#',
            mail: '#'
          }
        },
        {
          full_name: 'Olivia Wilde',
          avatar: require('./assets/team-3.jpg'),
          position: 'Lead Designer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ab ipsam iure doloribus fuga sunt consequuntur, quia natus?',
          social: {
            facebook: '#',
            twitter: '#',
            linkedIn: '#',
            mail: '#'
          }
        },
        {
          full_name: 'Ashley Greene',
          avatar: require('./assets/team-4.jpg'),
          position: 'SEO / Developer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, similique natus eius? Reiciendis facere distinctio, a odio. Voluptatibus.',
          social: {
            twitter: '#',
            linkedIn: '#',
            mail: '#'
          }
        }
      ],
      portfolio_works: [
        {
          category: 'Web',
          name: 'Isometric Perspective Mock-Up',
          preview_image: require('./assets/portfolio-1.png')
        },
        {
          category: 'Apps',
          name: 'Time Zone App UI',
          preview_image: require('./assets/portfolio-2.png')
        },
        {
          category: 'Apps',
          name: 'Viro Media Players UI copy 2',
          preview_image: require('./assets/portfolio-3.png')
        },
        {
          category: 'Icons',
          name: 'Blog / Magazine Flat UI Kit',
          preview_image: require('./assets/portfolio-4.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  header.page-header {
    background-color: #87509c;
  }
</style>
