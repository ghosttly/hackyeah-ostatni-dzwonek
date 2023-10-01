/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		suggestionUnivesties:{

		}
	},
	DialogueInput:{
		role:"DialogueRole"
	},
	Mutation:{
		createBotDialogue:{
			botPayload:"DialogueInput",
			userPayload:"DialogueInput"
		},
		reactOnConversation:{

		}
	},
	DialogueRole: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		listJobs:"Job",
		suggestionUnivesties:"Path"
	},
	Path:{
		_id:"String",
		name:"String",
		tags:"String",
		university:"University"
	},
	University:{
		name:"String",
		paths:"Path",
		website:"String"
	},
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		testEndpoint:"Boolean",
		useFineTuneJob:"Boolean"
	},
	Job:{
		_id:"String",
		conversationCountWhenCreated:"Int",
		createdAt:"String",
		file:"String",
		tuneId:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}