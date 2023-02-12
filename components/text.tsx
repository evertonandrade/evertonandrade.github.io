/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../styles/post.module.css';

// TODO: remove any type
const Text = ({ text }: any) => {
  if (!text) {
    return null;
  }
  // TODO: remove any type
  return text.map((value: any) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={text}
        className={[
          bold ? styles.bold : '',
          code ? styles.code : '',
          italic ? styles.italic : '',
          strikethrough ? styles.strikethrough : '',
          underline ? styles.underline : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

export default Text;
