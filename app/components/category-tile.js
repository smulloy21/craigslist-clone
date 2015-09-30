import Ember from 'ember';

export default Ember.Component.extend({
  alphabetical: ['name:asc'],
  sortedCategories: Ember.computed.sort('categories', 'alphabetical'),
});
