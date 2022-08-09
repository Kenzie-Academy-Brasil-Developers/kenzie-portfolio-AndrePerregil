// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Creating experiences through the use of technology{" "}
            </Text>
            <Text type="body1" color="grey6">
              I'm studying Full-Stack development at Kenzie Academy Brasil,
              taking part of high variety of projects to evolve my developing
              skillset
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projects
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Technologies
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            My tech-stack
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Want to chat?
              </Text>
              <Text as="p" type="body1" color="grey2">
                Please stop by my linkedIn page, you can check what I've been up
                to there, and I'm always willing to chat!
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                My profile on LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projects
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originality and{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedication
                </Text>{" "}
                in every detail
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
