import React from 'react';

type FooterInfo = {
  createBy?: string;
};

export const FooterInfo: React.FC<FooterInfo> = ({ createBy = 'Kim' }) => {
  return (
    <footer className={'info'}>
      <p>{'Double-click to edit a todo'}</p>
      <p>
        Template by <a href="http://sindresorhus.com">{'independent'}</a>
      </p>
      <p>
        Created by <a href="http://todomvc.com">{createBy}</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">{'TodoMVC'}</a>
      </p>
    </footer>
  );
};
