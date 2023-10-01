/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		createBotDialogue:{
			userPayload:"DialogueInput",
			botPayload:"DialogueInput"
		},
		reactOnConversation:{

		}
	},
	DialogueRole: "enum" as const,
	Query:{
		suggestionUnivesties:{

		}
	},
	DialogueInput:{
		role:"DialogueRole"
	}
}

export const ReturnTypes: Record<string,any> = {
	University:{
		name:"String",
		paths:"Path"
	},
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		testEndpoint:"Boolean",
		useFineTuneJob:"Boolean"
	},
	Query:{
		listJobs:"Job",
		listUnis:"University",
		suggestionUnivesties:"Path"
	},
	Job:{
		_id:"String",
		conversationCountWhenCreated:"Int",
		createdAt:"String",
		file:"String",
		tuneId:"String"
	},
	Path:{
		_id:"String",
		name:"String",
		tags:"String",
		university:"University"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}