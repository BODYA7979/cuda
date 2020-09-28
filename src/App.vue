<template>
  <div id="app">

    <header class="page-header">
      <Navigation
        :links="getMenuLinksForMenu('header')"
      />
      <HeaderContent />
    </header>

    <PageSection
      id="about"
      title="Services we provide"
      description="We are working with both individuals and businesses from all over the globe<br>to create awesome websites and applications."
      bgColor="#17c2a4"
      textColor="#FFF"
    >
      <ServicesSection
        :services="services"
      />
    </PageSection>

    <PageSection
      id="team"
      title="Meet our beautiful team"
      description="We are a small team of designers and developers, who help brands with big ideas."
      bgColor="#e7f1f8"
    >
      <TeamSection
        :people="team_people"
      />
    </PageSection>

    <PageSection
      id="skills"
      title="We got skills!"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br>tempor incididunt ut labore et dolore magna aliqua."
      bgColor="#ffffff"
    >
      <SkillsSection
        :skills="skills"
      />
    </PageSection>

    <PageSection
      id="portfolio"
      title="Our portfolio"
      description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet<br>consectetur, adipisci velit, sed quia non numquam"
      bgColor="#ffdd99"
    >
      <PortfolioSection
        :works="portfolio_works"
      />
    </PageSection>

    <PageSection
      id="testimonials"
      title="What People Say About Us"
      description="Our clients love us!"
      bgColor="#d74680"
      textColor="#FFF"
    >
      <TestimonialsSection
        :items="testimonials"
      />
    </PageSection>

    <PageSection
      id="contact"
      title="Get In Touch"
      description="1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111"
      bgColor="#3c5499"
      textColor="#FFF"
    >
      <ContactSection
        @submit="onContactFormSubmit"
      />
    </PageSection>

    <footer class="page-footer">
      <FooterContent
        :links="getMenuLinksForMenu('footer')"
      />
    </footer>

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
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import FooterContent from "./components/FooterContent";

export default {
  name: 'App',
  components: {
    FooterContent,
    ContactSection,
    TestimonialsSection,
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
      menu_items: [
        {
          name: 'Home',
          url: '/',
          menus: ['header']
        },
        {
          name: 'About',
          url: '#',
          menus: ['header']
        },
        {
          name: 'Work',
          url: '#',
          menus: ['header']
        },
        {
          name: 'Blog',
          url: '#',
          menus: ['header']
        },
        {
          name: 'Contact',
          url: '/#contact',
          menus: ['header']
        },
        {
          name: 'Facebook',
          url: '#',
          menus: ['footer']
        },
        {
          name: 'Twitter',
          url: '#',
          menus: ['footer'],
        },
        {
          name: 'LinkedIn',
          url: '#',
          menus: ['footer']
        },
        {
          name: 'Behance',
          url: '#',
          menus: ['footer']
        },
        {
          name: 'Dribbble',
          url: '#',
          menus: ['footer']
        },
        {
          name: 'GitHub',
          url: '#',
          menus: ['footer']
        }
      ],
      services: [
        {
          image: require('./assets/flag.png'),
          name: 'Branding',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptas, doloremque illo.'
        },
        {
          image: require('./assets/design.png'),
          name: 'Design',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sed dolor modi!'
        },
        {
          image: require('./assets/development.png'),
          name: 'Development',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, modi doloribus.'
        },
        {
          image: require('./assets/rs.png'),
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
      ],
      testimonials: [
        {
          avatar: require('./assets/reviews-1.jpg'),
          author: 'Chanel Iman',
          position: 'CEO of Pinterest',
          text: 'Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.'
        },
        {
          avatar: require('./assets/reviews-2.jpg'),
          author: 'Adriana Lima',
          position: 'Founder of Instagram',
          text: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.'
        },
        {
          avatar: require('./assets/reviews-3.jpg'),
          author: 'Anne Hathaway',
          position: 'Lead Designer at Behance',
          text: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.'
        },
        {
          avatar: require('./assets/reviews-4.jpg'),
          author: 'Emma Stone',
          position: 'Co-Founder of Shazam',
          text: 'Phasellus non purus vel arcu tempor commodo. Fusce semper, purus vel luctus molestie, risus sem cursus neque.'
        }
      ]
    }
  },
  methods: {
    onContactFormSubmit(values) {
      this.$bvModal.msgBoxOk(JSON.stringify(values));
    },
    getMenuLinksForMenu(menu_name) {
      return this.menu_items.filter((menu_item) => {
        return menu_item.menus.includes(menu_name);
      });
    }
  },
}
</script>

<style lang="scss" scoped>
  header.page-header {
    padding-top: 56px;
    background-color: #87509c;
  }
</style>
