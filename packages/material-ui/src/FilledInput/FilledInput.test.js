import * as React from 'react';
import { expect } from 'chai';
import { createMount, createClientRender, describeConformanceV5 } from 'test/utils';
import FilledInput, { filledInputClasses as classes } from '@material-ui/core/FilledInput';
import InputBase from '@material-ui/core/InputBase';

describe('<FilledInput />', () => {
  const render = createClientRender();
  const mount = createMount();

  describeConformanceV5(<FilledInput open />, () => ({
    classes,
    inheritComponent: InputBase,
    render,
    mount,
    refInstanceof: window.HTMLDivElement,
    muiName: 'MuiFilledInput',
    testDeepOverrides: { slotName: 'input', slotClassName: classes.input },
    testVariantProps: { variant: 'contained', fullWidth: true },
    testStateOverrides: { prop: 'size', value: 'small', styleKey: 'sizeSmall' },
    skip: ['componentProp', 'componentsProp'],
  }));

  it('should have the underline class', () => {
    const { container } = render(<FilledInput />);
    const root = container.firstChild;
    expect(root).to.have.class(classes.underline);
  });

  it('can disable the underline', () => {
    const { container } = render(<FilledInput disableUnderline />);
    const root = container.firstChild;
    expect(root).not.to.have.class(classes.underline);
  });
});
