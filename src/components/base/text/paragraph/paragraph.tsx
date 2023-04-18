import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type ParagraphProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xl2" | "xl3" | "xl4" | "xl5" | "xl6" | "xl7" | "xl8" | "xl9",
  element: 'p' | 'div' | 'span',
} & React.HTMLAttributes<HTMLParagraphElement>;


const Paragraph = ({ className, size = "md", element: Element = "p", ...rest }: ParagraphProps) => {
  return (
    <Element
      className={clsx(styles[size], className, "text-xl")}
      {...rest}
    />
  );
}

export default Paragraph;
