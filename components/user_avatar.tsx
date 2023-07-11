import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";


export { UserButton }

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
}

const UserButton = ({
  image,
  name,
  email,
  ...others
}: UserButtonProps) => (
  <UnstyledButton
    sx={(theme) => ({
      display: "block",
      width: "100%",
      padding: theme.spacing.xs,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
      },
    })}
    {...others}
  >
    <Group>
      <Avatar src={image} radius="xl" />

      <div style={{ flex: 1 }}>
        <Text size="sm" weight={500}>
          {name}
        </Text>

        <Text color="dimmed" size="xs">
          {email}
        </Text>
      </div>

    </Group>
  </UnstyledButton>
);
