import { builder } from '../builder';

builder.prismaObject('User', {
	fields: (t) => ({
		id: t.exposeID('id'),
		email: t.exposeString('email'),
		name: t.exposeString('name', { nullable: true }),
	}),
});
