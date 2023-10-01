/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	DialogueRole: "enum" as const,
	DialogueInput:{
		role:"DialogueRole"
	},
	Query:{
		suggestionUnivesties:{

		}
	},
	Mutation:{
		createBotDialogue:{
			botPayload:"DialogueInput",
			userPayload:"DialogueInput"
		},
		reactOnConversation:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Job:{
		_id:"String",
		conversationCountWhenCreated:"Int",
		createdAt:"String",
		file:"String",
		tuneId:"String"
	},
	University:{
		name:"String",
		paths:"Path",
		website:"String"
	},
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
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		testEndpoint:"Boolean",
		useFineTuneJob:"Boolean"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}