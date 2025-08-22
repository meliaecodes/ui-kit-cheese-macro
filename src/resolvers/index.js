import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);
  // the resolver isn't used in this app, but if it was I'm sure it'd say Cheese
  return 'Cheese!';
});

export const handler = resolver.getDefinitions();
