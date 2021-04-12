import { html, TemplateResult } from 'lit-html';
import '../src/counter/register.js';

export default {
  title: 'Clarity Addons',
  component: 'cda-counter',
  argTypes: {
    value: { control: 'number' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  value?: number;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({ value = 5, slot }: ArgTypes) => html`
  <cda-counter .value=${value}> ${slot} </cda-counter>
`;

export const Regular = Template.bind({});

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};

SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
