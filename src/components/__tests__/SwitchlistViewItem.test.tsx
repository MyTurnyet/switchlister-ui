import { render, RenderResult } from '@testing-library/react';
import { SwitchListViewItem } from '../SwitchlistViewItem';

describe('Todo Item', () => {
  const title = 'FOO!';
  const todoItem: RenderResult = render(<SwitchListViewItem title={title} />);
  it('displays item title', () => {
    todoItem.getByText(title);
  });
});
