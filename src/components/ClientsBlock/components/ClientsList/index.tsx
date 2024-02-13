import { clientsBlockList } from "@/base/constants";
import React from "react";
import { ClientsListContainer, ClientsListImageContainer } from "./styles";

export const ClientsList: React.FC = () => {
  return (
    <ClientsListContainer>
      {clientsBlockList.clients.map((client) => (
        <ClientsListImageContainer
          key={client.name}
          dangerouslySetInnerHTML={{ __html: client.image }}
          title={client.name}
        />
      ))}
    </ClientsListContainer>
  );
};
