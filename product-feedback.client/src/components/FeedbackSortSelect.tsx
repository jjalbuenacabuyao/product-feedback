import {
  Content,
  Group,
  Icon,
  Item,
  ItemText,
  Label,
  Portal,
  Root,
  Separator,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select";
import { Fragment } from "react/jsx-runtime";

const FeedbackSortSelect = () => {
  const selection = [
    {
      label: "Upvotes",
      options: [
        {
          label: "Most Upvotes",
          value: "most-upvotes",
        },
        {
          label: "Least Upvotes",
          value: "least-upvotes",
        },
      ],
    },
    {
      label: "Comments",
      options: [
        {
          label: "Most Comments",
          value: "most-comments",
        },
        {
          label: "Least Comments",
          value: "least-comments",
        },
      ],
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <Root defaultValue="most-upvotes">
        <Trigger className="px-6 py-3 rounded-full flex items-center justify-center leading-0 gap-2 bg-white dark:bg-gray-dark-3 shadow-md focus:shadow-lg focus:outline focus:outline-gray-11">
          <Value placeholder="Sort" />
          <Icon>
            <span className="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </Icon>
        </Trigger>

        <Portal>
          <Content
            position="popper"
            side="bottom"
            style={{ width: "var(--radix-select-trigger-width)" }}
            className="mt-1 overflow-hidden rounded-lg bg-white dark:bg-gray-dark-3 shadow-md dark:shadow-gray-dark-1"
          >
            <Viewport className="py-1">
              {selection.map((item, index) => (
                <Fragment key={item.label}>
                  <Group>
                    <Label className="text-xs pl-2 pt-1">{item.label}</Label>
                    {item.options.map(({ label, value }) => (
                      <Item
                        key={value}
                        value={value}
                        className="px-2 py-4 data-[state=checked]:bg-gray-5 dark:data-[state=checked]:bg-gray-dark-5 hover:bg-gray-3 focus:outline-0 data-[state=unchecked]:focus:bg-gray-3 dark:data-[state=unchecked]:focus:bg-gray-dark-6 cursor-pointer"
                      >
                        <ItemText>{label}</ItemText>
                      </Item>
                    ))}
                  </Group>
                  {index !== selection.length - 1 && (
                    <Separator className="h-px bg-gray-3 my-2" />
                  )}
                </Fragment>
              ))}
            </Viewport>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};

export default FeedbackSortSelect;
