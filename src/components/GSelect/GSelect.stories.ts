import { storiesOf } from '@storybook/vue';
import GSelect from './GSelect.vue';
import { action } from '@storybook/addon-actions';

storiesOf('GSelect', module)
  .addParameters({ component: GSelect })
  .add('Default', () => ({
    components: { GSelect },
    data () {
      return {
        value1: ['Value2'],
        value2: '',
        value3: 'Value2',
        value4: 'Value2',
        value5: '',
        value6: 'Value2',
        value7: '',
        value8: [],
        value9: '',
        value10: [],
        value11: {},
      };
    },
    props: {
      options: {
        default: [
          {
            value: 'Value1',
            text: 'Text Option 1 with i',
          },
          {
            value: 'Value2',
            text: 'Text Option 2 with i',
          },
          {
            value: 'Value3',
            text: 'Text Option 3 with i',
            disabled: true,
          },
        ],
      },
    },
    methods: {
      onSearchChange (text: string) {
        action('On Search Change')(text);
      },
      onChange (value: string | string[]) {
        action('On Change')(value);
      },
      onBlur (value: string | string[]) {
        action('On blur')(value);
      },
      onClear () {
        action('On clear')();
      }
    },
    template: `
    <div style="margin: 40px 10vh 10vh">
      <GSelect class="g-mb-20" :options="options" v-model="value1" label="Email" @onChange="onChange" placeholder="Placeholder" isCheckbox @blur="onBlur"/>
      <GSelect class="g-mb-20" :options="options" v-model="value2" label="Email" @onChange="onChange" placeholder="Placeholder" isSearch @onSearchChange="onSearchChange" feedback="feedback" isOutlineLabel/>
      <GSelect class="g-mb-20" :options="options" v-model="value3" label="Email" />
      <GSelect class="g-mb-20" :options="options" v-model="value4" label="Small" size="small" />
      <GSelect class="g-mb-20" :options="options" v-model="value5" label="Middle" size="middle" placeholder="Placeholder" />
      <GSelect class="g-mb-20" :options="options" v-model="value6" label="Big" size="big" />
      <GSelect class="g-mb-20" :options="options" v-model="value7" placeholder="Email" isBorderless />
      <div style="width: 150px">
      <GSelect class="g-mb-20" :options="options" v-model="value8" label="Email" @onChange="onChange" placeholder="Placeholder" isCheckbox isOutlineLabel/>
      </div>
      <GSelect class="g-mb-20" :disable="true" :options="options" v-model="value7" label="Middle" size="middle" placeholder="Disabled" />
      <GSelect class="g-mb-20" :options="options" v-model="value9" label="Email Reduce" @onChange="onChange" placeholder="Placeholder" isSearch @onSearchChange="onSearchChange" feedback="feedback" :reduce-value="(item) => ({ asd: item.value + 'reduced' })" />
      <GSelect class="g-mb-20" :options="options" v-model="value10" label="Email Reduce Multi" @onChange="onChange" placeholder="Placeholder" isSearch @onSearchChange="onSearchChange" feedback="feedback" isCheckbox :reduce-value="(item) => ({ asd: item.value + 'reduced' })" @clear="onClear" />
      <GSelect class="g-mb-20" :options="options" v-model="value11" label="Email Reduce Object" @onChange="onChange" placeholder="Placeholder" isSearch @onSearchChange="onSearchChange" feedback="feedback" :reduce-value="(item) => item" />
    </div>`,
  }));