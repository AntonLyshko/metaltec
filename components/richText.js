import React, { memo, useMemo } from 'react';
import textRender from './textRender'

const richText = (props) => {
    let data = props.data;
    const html = useMemo(() => textRender.render(data || ''));
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default memo(richText);