export const limitTo = (limit: any) => (editorState: any) => {
    const { length = 0 } = editorState?.plainText || "";
    return length <= 0 || length > limit ? "out of limits" : undefined;
  };
  