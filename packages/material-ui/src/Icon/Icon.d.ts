import * as React from 'react';
import { SxProps } from '@material-ui/system';
import { PropTypes } from '..';
import { Theme } from '../styles';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';

export interface IconTypeMap<P = {}, D extends React.ElementType = 'span'> {
  props: P & {
    /**
     * The base class applied to the icon. Defaults to 'material-icons', but can be changed to any
     * other base class that suits the icon font you're using (e.g. material-icons-rounded, fas, etc).
     * @default 'material-icons'
     */
    baseClassName?: string;
    /**
     * The name of the icon font ligature.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: {
      /** Styles applied to the root element. */
      root?: string;
      /** Styles applied to the root element if `color="primary"`. */
      colorPrimary?: string;
      /** Styles applied to the root element if `color="secondary"`. */
      colorSecondary?: string;
      /** Styles applied to the root element if `color="action"`. */
      colorAction?: string;
      /** Styles applied to the root element if `color="error"`. */
      colorError?: string;
      /** Styles applied to the root element if `color="disabled"`. */
      colorDisabled?: string;
      /** Styles applied to the root element if `fontSize="inherit"`. */
      fontSizeInherit?: string;
      /** Styles applied to the root element if `fontSize="small"`. */
      fontSizeSmall?: string;
      /** Styles applied to the root element if `fontSize="large"`. */
      fontSizeLarge?: string;
    };
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'inherit'
     */
    color?: Exclude<PropTypes.Color, 'default'> | 'action' | 'disabled' | 'error';
    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     * @default 'medium'
     */
    fontSize?: 'inherit' | 'large' | 'medium' | 'small';
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  defaultComponent: D;
}
/**
 *
 * Demos:
 *
 * - [Icons](https://material-ui.com/components/icons/)
 * - [Material Icons](https://material-ui.com/components/material-icons/)
 *
 * API:
 *
 * - [Icon API](https://material-ui.com/api/icon/)
 */
declare const Icon: OverridableComponent<IconTypeMap> & { muiName: string };

export type IconClassKey = keyof NonNullable<IconTypeMap['props']['classes']>;

export type IconProps<
  D extends React.ElementType = IconTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<IconTypeMap<P, D>, D>;

export default Icon;
