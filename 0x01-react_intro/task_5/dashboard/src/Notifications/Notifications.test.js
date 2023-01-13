describe('Notifications tests', () => {
  describe('Notifications renders without crashing', () => {
    it('Renders', function() {
      shallow(<Notifications />);
    });
  });
  describe('Notifications renders three list items', () => {
    it('Renders', function() {
      const wrapper = shallow(<Notifications />);
      const list = wrapper.find('li');
      assert.equal(list.length, 3);
    });
  });
  describe('Notifications renders "Here is the list of notifications"', () => {
    it('Renders', function() {
      const wrapper = shallow(<Notifications />);
      const text = wrapper.find('p');
      expect(text.text()).toEqual('Here is the list of notifications');
    });
  });
});